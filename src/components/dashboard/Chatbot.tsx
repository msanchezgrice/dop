'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageCircle, FiX, FiMaximize, FiMinimize } from 'react-icons/fi';
import { sendMessageToChatbot, CHATBOT_SYSTEM_PROMPT } from '@/utils/openai';
import { trackEvent } from '@/utils/analytics';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
    { role: 'assistant', content: 'Hi there! I\'m your product management assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackEvent('chatbot_opened');
    } else {
      trackEvent('chatbot_closed');
    }
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
    trackEvent('chatbot_message_sent', { message_length: input.trim().length });

    // Get response from API
    await sendMessageToChatbot([...messages, userMessage], (response) => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      
      // Track event
      trackEvent('chatbot_response_received', { response_length: response.length });
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    trackEvent('chatbot_' + (isExpanded ? 'minimized' : 'expanded'));
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open chat"
      >
        <FiMessageCircle size={24} />
      </button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 ${
        isExpanded ? 'w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-5/6' : 'w-80 h-96'
      }`}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
        <h3 className="font-medium">HeadOfProduct Assistant</h3>
        <div className="flex items-center space-x-2">
          <button onClick={toggleExpand} className="text-white hover:text-blue-100">
            {isExpanded ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
          </button>
          <button onClick={handleToggle} className="text-white hover:text-blue-100">
            <FiX size={18} />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.filter(m => m.role !== 'system').map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <div dangerouslySetInnerHTML={{ 
                __html: message.content.replace(/\n/g, '<br>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
              }} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block rounded-lg px-4 py-2 bg-white text-gray-500 border border-gray-200 animate-pulse">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for product management help..."
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={isLoading || input.trim() === ''}
        >
          <FiSend size={18} />
        </button>
      </form>
    </div>
  );
} 