"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiDatabase, FiCheck, FiPlus, FiX, FiChevronRight } from 'react-icons/fi';

type DataSource = {
  id: string;
  name: string;
  type: string;
  connected: boolean;
};

export default function DataSourcesPage() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [connectedSources, setConnectedSources] = useState<string[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newApiKey, setNewApiKey] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const dataSources: DataSource[] = [
    { id: '1', name: 'Amplitude', type: 'analytics', connected: connectedSources.includes('1') },
    { id: '2', name: 'Mixpanel', type: 'analytics', connected: connectedSources.includes('2') },
    { id: '3', name: 'Firebase', type: 'analytics', connected: connectedSources.includes('3') },
    { id: '4', name: 'Jira', type: 'project-management', connected: connectedSources.includes('4') },
    { id: '5', name: 'Linear', type: 'project-management', connected: connectedSources.includes('5') },
    { id: '6', name: 'GitHub', type: 'development', connected: connectedSources.includes('6') },
  ];
  
  const handleSelectSource = (sourceId: string) => {
    setSelectedSource(sourceId);
    setShowAddForm(true);
    setError(null);
    setNewApiKey('');
    setNewSourceUrl('');
  };
  
  const handleConnect = async () => {
    if (!selectedSource) return;
    if (!newApiKey.trim()) {
      setError('API Key is required');
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      // In a real app, you'd validate the API key with the data source's API
      // For demo purposes, we'll simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add to connected sources
      setConnectedSources(prev => [...prev, selectedSource]);
      
      // Close the form
      setShowAddForm(false);
      setSelectedSource(null);
      
      // Store connection status in localStorage for this demo
      localStorage.setItem('dataSourcesConnected', 'true');
    } catch (err) {
      setError('An error occurred while connecting. Please check your API key and try again.');
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };
  
  const handleContinue = () => {
    router.push('/dashboard/onboarding/features');
  };
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Connect Data Sources
          </h1>
          <p className="mt-2 text-slate-600">
            Connect CPO.AI to your analytics, project management, and development tools to get the most out of your AI assistant.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FiDatabase className="text-blue-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                Your Data Sources
              </h2>
            </div>
            <p className="text-slate-600">
              Connect at least one data source to start receiving insights. We recommend connecting your analytics platform first.
            </p>
          </div>
          
          {showAddForm && selectedSource && (
            <div className="mb-8 p-6 border border-blue-200 rounded-lg bg-blue-50">
              <h3 className="text-lg font-medium text-slate-900 mb-4">
                Connect {dataSources.find(s => s.id === selectedSource)?.name}
              </h3>
              
              {error && (
                <div className="mb-6 p-4 flex items-start bg-red-50 text-red-700 rounded-lg">
                  <FiX className="mr-3 mt-1" />
                  <p>{error}</p>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="apiKey" className="block text-sm font-medium text-slate-700 mb-1">
                  API Key
                </label>
                <input
                  id="apiKey"
                  type="text"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  className="input-field"
                  placeholder="Enter your API Key"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="sourceUrl" className="block text-sm font-medium text-slate-700 mb-1">
                  Project URL (optional)
                </label>
                <input
                  id="sourceUrl"
                  type="text"
                  value={newSourceUrl}
                  onChange={(e) => setNewSourceUrl(e.target.value)}
                  className="input-field"
                  placeholder="https://your-project-url.com"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary mr-3"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConnect}
                  className="btn-primary"
                  disabled={isConnecting}
                >
                  {isConnecting ? "Connecting..." : "Connect"}
                </button>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Analytics Platforms</h3>
            {dataSources
              .filter(source => source.type === 'analytics')
              .map(source => (
                <div 
                  key={source.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                      {/* This would be the platform's logo in a real app */}
                      <span className="font-semibold text-slate-500">{source.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{source.name}</h4>
                      <p className="text-sm text-slate-500">Analytics platform</p>
                    </div>
                  </div>
                  
                  {source.connected ? (
                    <div className="flex items-center text-green-600">
                      <FiCheck className="mr-2" />
                      <span className="font-medium">Connected</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleSelectSource(source.id)}
                      className="btn-primary text-sm py-1.5 px-4"
                    >
                      Connect
                    </button>
                  )}
                </div>
              ))}
          </div>
          
          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Project Management</h3>
            {dataSources
              .filter(source => source.type === 'project-management')
              .map(source => (
                <div 
                  key={source.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                      {/* This would be the platform's logo in a real app */}
                      <span className="font-semibold text-slate-500">{source.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{source.name}</h4>
                      <p className="text-sm text-slate-500">Project management tool</p>
                    </div>
                  </div>
                  
                  {source.connected ? (
                    <div className="flex items-center text-green-600">
                      <FiCheck className="mr-2" />
                      <span className="font-medium">Connected</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleSelectSource(source.id)}
                      className="btn-primary text-sm py-1.5 px-4"
                    >
                      Connect
                    </button>
                  )}
                </div>
              ))}
          </div>
          
          <div className="mt-6 space-y-3">
            <h3 className="text-lg font-medium text-slate-900 mb-2">Development Tools</h3>
            {dataSources
              .filter(source => source.type === 'development')
              .map(source => (
                <div 
                  key={source.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4">
                      {/* This would be the platform's logo in a real app */}
                      <span className="font-semibold text-slate-500">{source.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{source.name}</h4>
                      <p className="text-sm text-slate-500">Development platform</p>
                    </div>
                  </div>
                  
                  {source.connected ? (
                    <div className="flex items-center text-green-600">
                      <FiCheck className="mr-2" />
                      <span className="font-medium">Connected</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleSelectSource(source.id)}
                      className="btn-primary text-sm py-1.5 px-4"
                    >
                      Connect
                    </button>
                  )}
                </div>
              ))}
          </div>
          
          <div className="mt-8 border-t border-slate-200 pt-6 flex justify-end">
            <button
              onClick={() => router.push('/dashboard')}
              className="btn-secondary mr-4"
            >
              Skip for Now
            </button>
            <button
              onClick={handleContinue}
              className="btn-primary"
            >
              Continue to Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 