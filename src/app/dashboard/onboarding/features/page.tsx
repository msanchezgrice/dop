"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FiBarChart2, 
  FiLayers, 
  FiUsers, 
  FiClipboard, 
  FiCheck, 
  FiInfo,
  FiDollarSign,
  FiTarget,
  FiActivity,
  FiPieChart
} from 'react-icons/fi';

type Feature = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  category: string;
  included: boolean;
};

export default function FeaturesPage() {
  const router = useRouter();
  const [features, setFeatures] = useState<Feature[]>([
    // Gaming Metrics Analysis
    {
      id: 'metrics-daily',
      name: 'Daily KPI Monitoring',
      description: 'Automatic monitoring and analysis of key performance indicators',
      icon: FiBarChart2,
      category: 'metrics',
      included: true
    },
    {
      id: 'metrics-player',
      name: 'Player Behavior Analysis',
      description: 'Analyze player behavior patterns and retention metrics',
      icon: FiActivity,
      category: 'metrics',
      included: true
    },
    {
      id: 'metrics-anomaly',
      name: 'Anomaly Detection',
      description: 'Automatically detect abnormal trends in your metrics',
      icon: FiPieChart,
      category: 'metrics',
      included: true
    },
    
    // Feature Prioritization
    {
      id: 'features-sizing',
      name: 'T-shirt Sizing Automation',
      description: 'Automatically estimate feature development complexity',
      icon: FiLayers,
      category: 'features',
      included: true
    },
    {
      id: 'features-cost',
      name: 'Development Cost Estimation',
      description: 'Estimate the cost of implementing new features',
      icon: FiDollarSign,
      category: 'features',
      included: true
    },
    {
      id: 'features-impact',
      name: 'Impact Scoring',
      description: 'Score feature ideas based on potential business impact',
      icon: FiTarget,
      category: 'features',
      included: true
    },
    
    // Team Structure
    {
      id: 'team-composition',
      name: 'Team Composition Analysis',
      description: 'Get recommendations on optimal team structures',
      icon: FiUsers,
      category: 'team',
      included: true
    },
    {
      id: 'team-skill',
      name: 'Skill Gap Identification',
      description: 'Identify missing skills in your product teams',
      icon: FiUsers,
      category: 'team',
      included: false
    },
    
    // Post-Mortems
    {
      id: 'postmortem-data',
      name: 'Automated Data Gathering',
      description: 'Automatically gather data for post-mortem analysis',
      icon: FiClipboard,
      category: 'postmortem',
      included: true
    },
    {
      id: 'postmortem-root',
      name: 'Root Cause Analysis',
      description: 'AI-assisted root cause analysis for issues',
      icon: FiClipboard,
      category: 'postmortem',
      included: false
    }
  ]);
  
  const toggleFeature = (featureId: string) => {
    setFeatures(prev => 
      prev.map(feature => 
        feature.id === featureId 
          ? { ...feature, included: !feature.included } 
          : feature
      )
    );
  };
  
  const getIncludedFeatureCount = (category: string) => {
    return features.filter(f => f.category === category && f.included).length;
  };
  
  const getTotalFeatureCount = (category: string) => {
    return features.filter(f => f.category === category).length;
  };
  
  const handleFinish = () => {
    // Store selected features in localStorage for this demo
    localStorage.setItem('featuresSelected', 'true');
    localStorage.setItem('selectedFeatures', JSON.stringify(
      features.filter(f => f.included).map(f => f.id)
    ));
    
    // Navigate to dashboard
    router.push('/dashboard');
  };
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Select Features
          </h1>
          <p className="mt-2 text-slate-600">
            Choose which features you want to enable for your CPO.AI assistant. You can change these at any time.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          {/* Metrics Analysis */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FiBarChart2 className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Gaming Metrics Analysis
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                {getIncludedFeatureCount('metrics')}/{getTotalFeatureCount('metrics')} features enabled
              </div>
            </div>
            
            <div className="space-y-3">
              {features
                .filter(feature => feature.category === 'metrics')
                .map(feature => (
                  <div 
                    key={feature.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        <feature.icon className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{feature.name}</h4>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleFeature(feature.id)}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ease-in-out focus:outline-none ${
                          feature.included ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
                        }`}
                      >
                        <span 
                          className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                            feature.included ? 'translate-x-6' : 'translate-x-1'
                          }`} 
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Feature Prioritization */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FiLayers className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Feature Prioritization
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                {getIncludedFeatureCount('features')}/{getTotalFeatureCount('features')} features enabled
              </div>
            </div>
            
            <div className="space-y-3">
              {features
                .filter(feature => feature.category === 'features')
                .map(feature => (
                  <div 
                    key={feature.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        <feature.icon className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{feature.name}</h4>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleFeature(feature.id)}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ease-in-out focus:outline-none ${
                          feature.included ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
                        }`}
                      >
                        <span 
                          className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                            feature.included ? 'translate-x-6' : 'translate-x-1'
                          }`} 
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Team Structure */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FiUsers className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Team Structure Optimization
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                {getIncludedFeatureCount('team')}/{getTotalFeatureCount('team')} features enabled
              </div>
            </div>
            
            <div className="space-y-3">
              {features
                .filter(feature => feature.category === 'team')
                .map(feature => (
                  <div 
                    key={feature.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        <feature.icon className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{feature.name}</h4>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleFeature(feature.id)}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ease-in-out focus:outline-none ${
                          feature.included ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
                        }`}
                      >
                        <span 
                          className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                            feature.included ? 'translate-x-6' : 'translate-x-1'
                          }`} 
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Post-Mortems */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FiClipboard className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Post-Mortems & Retrospectives
                </h2>
              </div>
              <div className="text-sm text-slate-500">
                {getIncludedFeatureCount('postmortem')}/{getTotalFeatureCount('postmortem')} features enabled
              </div>
            </div>
            
            <div className="space-y-3">
              {features
                .filter(feature => feature.category === 'postmortem')
                .map(feature => (
                  <div 
                    key={feature.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        <feature.icon className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{feature.name}</h4>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleFeature(feature.id)}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ease-in-out focus:outline-none ${
                          feature.included ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
                        }`}
                      >
                        <span 
                          className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                            feature.included ? 'translate-x-6' : 'translate-x-1'
                          }`} 
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-6 flex justify-end">
            <button
              onClick={handleFinish}
              className="btn-primary"
            >
              Complete Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 