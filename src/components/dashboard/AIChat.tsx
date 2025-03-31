'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMinus, FiMaximize2, FiX, FiMessageSquare } from 'react-icons/fi';
import { sendMessageToChatbot, CHATBOT_SYSTEM_PROMPT, Message } from '@/utils/openai';
import { trackEvent } from '@/utils/analytics';
import { APP_NAME } from '@/utils/constants';

// Sample conversation starters
const CONVERSATION_STARTERS = [
  "How can I improve our game's retention metrics?",
  "What's the best team structure for a mobile game studio?",
  "How should I prioritize our upcoming features?",
  "What monetization strategies would work best for our casual game?",
  "How can we optimize our user acquisition funnel?",
  "What KPIs should we track for our early access launch?",
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasWelcomeMessage, setHasWelcomeMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Listen for custom event to open the chat
  useEffect(() => {
    const handleOpenAiChat = () => {
      setIsOpen(true);
      setIsMinimized(false);
      trackEvent('ai_chat_opened_via_sidebar');
    };
    
    document.addEventListener('open-ai-chat', handleOpenAiChat);
    
    return () => {
      document.removeEventListener('open-ai-chat', handleOpenAiChat);
    };
  }, []);

  // Show welcome message when first opened
  useEffect(() => {
    if (isOpen && !hasWelcomeMessage && messages.length === 1) {
      const welcomeMessage = { 
        role: 'assistant' as const, 
        content: "👋 Hi there! I'm your Director of Product AI assistant. I'm here to help with product strategy, feature prioritization, metrics analysis, and more. How can I assist you today?" 
      };
      setMessages(prev => [...prev, welcomeMessage]);
      setHasWelcomeMessage(true);
    }
  }, [isOpen, hasWelcomeMessage, messages.length]);

  // Adjust input height based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(120, inputRef.current.scrollHeight)}px`;
    }
  }, [input]);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
      trackEvent('ai_chat_opened');
    } else {
      trackEvent('ai_chat_closed');
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    trackEvent(`ai_chat_${isMinimized ? 'expanded' : 'minimized'}`);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    trackEvent(`ai_chat_${isFullscreen ? 'windowed' : 'fullscreen'}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    // Add user message to chat
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Track event
    trackEvent('ai_chat_message_sent', { message_length: input.trim().length });

    // Get response from AI
    await sendMessageToChatbot([...messages, userMessage], (response) => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      
      // Track event
      trackEvent('ai_chat_response_received', { response_length: response.length });
    });
  };

  const handleStarterClick = async (starter: string) => {
    if (isLoading) return;
    
    // Add starter as user message
    const userMessage = { role: 'user' as const, content: starter };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Track event
    trackEvent('ai_chat_starter_used', { starter });

    // Get response from AI
    await sendMessageToChatbot([...messages, userMessage], (response) => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-40"
        aria-label="Open Director of Product AI"
      >
        <FiMessageSquare size={24} />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg flex items-center z-40 cursor-pointer" onClick={handleMinimize}>
        <span className="font-medium mr-2">Director of Product AI</span>
        <FiMinus size={18} />
      </div>
    );
  }

  return (
    <div 
      className={`fixed ${isFullscreen ? 'inset-0' : 'bottom-6 right-6 w-96 h-[600px] max-h-[80vh]'} bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 ease-in-out z-40`}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
        <h3 className="font-medium">Director of Product AI - {APP_NAME}</h3>
        <div className="flex items-center space-x-2">
          <button onClick={handleMinimize} className="text-white hover:text-blue-100 p-1">
            <FiMinus size={18} />
          </button>
          <button onClick={handleFullscreen} className="text-white hover:text-blue-100 p-1">
            <FiMaximize2 size={18} />
          </button>
          <button onClick={handleToggle} className="text-white hover:text-blue-100 p-1">
            <FiX size={18} />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.length <= 1 ? (
          <div className="h-full flex flex-col justify-center items-center text-center p-4">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiMessageSquare className="text-blue-600" size={32} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Director of Product AI</h4>
            <p className="text-gray-600 mb-8">
              Your personal product management consultant. Ask me anything about game product strategy, metrics, or team optimization.
            </p>
          </div>
        ) : (
          messages.filter(m => m.role !== 'system').map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-semibold text-xs">AI</span>
                </div>
              )}
              <div 
                className={`rounded-lg px-4 py-3 max-w-[75%] ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ 
                  __html: message.content
                    .replace(/\n\n/g, '<br/><br/>')
                    .replace(/\n/g, '<br/>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center ml-2">
                  <span className="text-gray-600 font-semibold text-xs">You</span>
                </div>
              )}
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
              <span className="text-blue-600 font-semibold text-xs">AI</span>
            </div>
            <div className="rounded-lg px-4 py-3 bg-white text-gray-500 border border-gray-200">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggested questions - shown only after welcome message and when no other messages */}
      {messages.length === 2 && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {CONVERSATION_STARTERS.slice(0, 3).map((starter, index) => (
              <button
                key={index}
                onClick={() => handleStarterClick(starter)}
                className="text-xs bg-white text-blue-600 border border-blue-300 rounded-full px-3 py-1 hover:bg-blue-50"
                disabled={isLoading}
              >
                {starter}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 bg-white">
        <div className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about product strategy, metrics, or team optimization..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-auto"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="absolute right-3 bottom-3 text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:hover:text-blue-600"
            disabled={isLoading || input.trim() === ''}
          >
            <FiSend size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send, Shift+Enter for a new line
        </p>
      </form>
    </div>
  );
} 