"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import DashboardNavbar from '../../components/dashboard/DashboardNavbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    
    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard-layout' });
    
    setIsLoading(false);
  }, [router]);
  
  // Show nothing while checking authentication
  if (isLoading) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />
      
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
} 