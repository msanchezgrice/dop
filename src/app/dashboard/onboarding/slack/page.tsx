"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSlack, FiCheck, FiX } from 'react-icons/fi';

export default function SlackIntegrationPage() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [workspace, setWorkspace] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleConnect = async () => {
    if (!workspace.trim()) {
      setError('Please enter your Slack workspace URL');
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      // In a real app, you'd redirect to Slack's OAuth page
      // For demo purposes, we'll simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // This would be the OAuth callback handling in a real app
      setIsConnected(true);
      
      // Store connection status in localStorage for this demo
      localStorage.setItem('slackConnected', 'true');
    } catch (err) {
      setError('An error occurred while connecting to Slack. Please try again.');
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };
  
  const handleContinue = () => {
    router.push('/dashboard/onboarding/data-sources');
  };
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Connect Slack Integration
          </h1>
          <p className="mt-2 text-slate-600">
            Connect CPO.AI to your Slack workspace to receive insights, alerts, and interact with the AI assistant directly in Slack.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          {isConnected ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="text-green-600" size={30} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Successfully Connected to Slack
              </h2>
              <p className="text-slate-600 mb-8">
                Your Slack workspace <span className="font-semibold">{workspace}</span> has been connected to CPO.AI. You can now receive notifications and interact with CPO.AI directly from Slack.
              </p>
              <button 
                onClick={handleContinue}
                className="btn-primary py-2 px-6"
              >
                Continue to Next Step
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <FiSlack className="text-blue-600" size={30} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Connect to Slack
                  </h2>
                  <p className="text-slate-600">
                    Allow CPO.AI to send messages and receive commands from your Slack workspace
                  </p>
                </div>
              </div>
              
              {error && (
                <div className="mb-6 p-4 flex items-start bg-red-50 text-red-700 rounded-lg">
                  <FiX className="mr-3 mt-1" />
                  <p>{error}</p>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="workspace" className="block text-sm font-medium text-slate-700 mb-1">
                  Slack Workspace URL
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                    https://
                  </span>
                  <input
                    id="workspace"
                    type="text"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                    placeholder="your-company.slack.com"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-slate-300"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-md font-medium text-slate-900">CPO.AI will be able to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-slate-600">Send messages and notifications to channels</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-slate-600">Respond to direct messages and commands</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-slate-600">Access basic information about your channels</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="btn-secondary mr-4"
                >
                  Skip for Now
                </button>
                <button
                  onClick={handleConnect}
                  className="btn-primary"
                  disabled={isConnecting}
                >
                  {isConnecting ? "Connecting..." : "Connect to Slack"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 