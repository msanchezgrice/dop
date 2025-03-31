"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { FiArrowRight, FiSlack, FiCheckCircle } from 'react-icons/fi';

export default function SlackIntegrationPage() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'onboarding-slack' });
    
    setIsLoading(false);
  }, [router]);

  const handleConnect = () => {
    setIsConnecting(true);
    
    // Track event
    trackEvent('slack_connect_started');
    
    // Simulate API call to connect to Slack
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
      
      // Track event
      trackEvent('slack_connected');
    }, 2000);
  };

  // Show nothing while checking authentication
  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Connect with Slack</h1>
          <p className="mt-2 text-lg text-gray-600">
            Integrate HeadOfProduct with your team's Slack workspace
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#4A154B] rounded-lg flex items-center justify-center mr-4">
                <FiSlack className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Slack Integration</h2>
                <p className="text-gray-600">Connect your Slack workspace</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              By connecting HeadOfProduct to Slack, you'll be able to:
            </p>
            
            <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
              <li>Receive automated product insights directly in your Slack channels</li>
              <li>Ask questions and get product management advice from within Slack</li>
              <li>Share feature prioritization results with your team</li>
              <li>Schedule automated reports and alerts</li>
            </ul>
            
            {!isConnected ? (
              <button 
                onClick={handleConnect}
                disabled={isConnecting}
                className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4A154B] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A154B] ${isConnecting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isConnecting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </>
                ) : (
                  <>
                    Connect to Slack
                  </>
                )}
              </button>
            ) : (
              <div className="flex items-center text-green-600">
                <FiCheckCircle size={24} className="mr-2" />
                <span className="text-lg font-medium">Successfully connected to Slack</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Dashboard
          </Link>
          
          <Link
            href="/dashboard/onboarding/data-sources"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={(e) => !isConnected && e.preventDefault()}
          >
            Next Step: Data Sources
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 