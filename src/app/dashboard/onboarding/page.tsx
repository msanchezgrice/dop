'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'onboarding' });
    
    // Redirect to first step of onboarding
    router.push('/dashboard/onboarding/slack');
  }, [router]);

  // This page acts as a redirect, so it doesn't need much content
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Setting up your workspace...</h1>
        <p className="text-gray-600">Please wait while we redirect you.</p>
      </div>
    </div>
  );
} 