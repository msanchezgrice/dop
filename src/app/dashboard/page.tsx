"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  FiBarChart2, 
  FiLayers, 
  FiUsers, 
  FiClipboard,
  FiSlack,
  FiDatabase,
  FiTrendingUp,
  FiTrendingDown,
  FiAlertCircle,
} from 'react-icons/fi';

export default function DashboardPage() {
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    // Get user data (for demo)
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.firstName);
    }
  }, []);
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {userName || 'User'}
        </h1>
        <p className="mt-2 text-slate-600">
          Here's what's happening with your product today.
        </p>
      </div>
      
      {/* Onboarding Progress */}
      <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Complete Your Setup</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FiSlack className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900">Connect Slack</h3>
                <p className="text-xs text-slate-500">Setup your Slack integration</p>
              </div>
            </div>
            <Link href="/dashboard/onboarding/slack" className="btn-primary text-sm py-1.5 px-4">
              Connect
            </Link>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FiDatabase className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900">Connect Data Sources</h3>
                <p className="text-xs text-slate-500">Link your analytics platforms</p>
              </div>
            </div>
            <Link href="/dashboard/onboarding/data-sources" className="btn-primary text-sm py-1.5 px-4">
              Connect
            </Link>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <FiLayers className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900">Select Features</h3>
                <p className="text-xs text-slate-500">Choose which features you want to use</p>
              </div>
            </div>
            <Link href="/dashboard/onboarding/features" className="btn-primary text-sm py-1.5 px-4">
              Configure
            </Link>
          </div>
        </div>
      </div>
      
      {/* KPI Overview */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">Daily Active Users</p>
                <h3 className="text-2xl font-bold text-slate-900">24,895</h3>
              </div>
              <div className="flex items-center text-green-600">
                <FiTrendingUp size={16} className="mr-1" />
                <span className="text-sm font-medium">+8.2%</span>
              </div>
            </div>
            <div className="h-10 bg-slate-50 rounded-lg">
              {/* This would be a chart in a real app */}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">D7 Retention</p>
                <h3 className="text-2xl font-bold text-slate-900">32.1%</h3>
              </div>
              <div className="flex items-center text-red-600">
                <FiTrendingDown size={16} className="mr-1" />
                <span className="text-sm font-medium">-2.3%</span>
              </div>
            </div>
            <div className="h-10 bg-slate-50 rounded-lg">
              {/* This would be a chart in a real app */}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">ARPDAU</p>
                <h3 className="text-2xl font-bold text-slate-900">$0.42</h3>
              </div>
              <div className="flex items-center text-green-600">
                <FiTrendingUp size={16} className="mr-1" />
                <span className="text-sm font-medium">+3.5%</span>
              </div>
            </div>
            <div className="h-10 bg-slate-50 rounded-lg">
              {/* This would be a chart in a real app */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Anomalies */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Detected Anomalies</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mt-0.5 mr-3 text-yellow-500">
                <FiAlertCircle size={18} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900">Level 5 Churn Spike</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Player dropoff has increased by 14% at level 5. This may indicate a difficulty spike.
                </p>
                <div className="mt-2">
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                    Investigate
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-0.5 mr-3 text-yellow-500">
                <FiAlertCircle size={18} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-900">IAP Conversion Drop</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Conversion rate for the $9.99 starter pack has decreased by 8.5% since the last update.
                </p>
                <div className="mt-2">
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                    Investigate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Modules */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            href="/dashboard/metrics" 
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiBarChart2 className="text-blue-600" size={24} />
            </div>
            <h3 className="text-md font-medium text-slate-900 mb-2">Metrics Analysis</h3>
            <p className="text-sm text-slate-600">
              Analyze your KPIs and player behavior metrics
            </p>
          </Link>
          
          <Link 
            href="/dashboard/features" 
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiLayers className="text-blue-600" size={24} />
            </div>
            <h3 className="text-md font-medium text-slate-900 mb-2">Feature Prioritization</h3>
            <p className="text-sm text-slate-600">
              Prioritize features based on impact and cost
            </p>
          </Link>
          
          <Link 
            href="/dashboard/team" 
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiUsers className="text-blue-600" size={24} />
            </div>
            <h3 className="text-md font-medium text-slate-900 mb-2">Team Structure</h3>
            <p className="text-sm text-slate-600">
              Optimize your team composition and roles
            </p>
          </Link>
          
          <Link 
            href="/dashboard/post-mortems" 
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FiClipboard className="text-blue-600" size={24} />
            </div>
            <h3 className="text-md font-medium text-slate-900 mb-2">Post-Mortems</h3>
            <p className="text-sm text-slate-600">
              Run retrospectives and capture learnings
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
} 