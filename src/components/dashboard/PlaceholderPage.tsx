'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  pageName: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  icon,
  pageName
}: PlaceholderPageProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        router.push('/login');
        return;
      }
      
      // Track page view
      trackEvent(AnalyticsEvents.PAGE_VIEW, { page: `dashboard-${pageName}` });
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router, pageName]);
  
  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          {icon && (
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              {icon}
            </div>
          )}
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            {title} Coming Soon
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            {description}
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
} 