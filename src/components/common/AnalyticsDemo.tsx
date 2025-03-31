'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { trackEvent } from '@/utils/analytics';

export function AnalyticsDemo() {
  const [count, setCount] = useState(0);
  
  // Track component mount
  useEffect(() => {
    trackEvent('analytics_demo_viewed');
  }, []);
  
  const handleButtonClick = () => {
    setCount(prev => prev + 1);
    
    // Track button click
    trackEvent('demo_button_clicked', { 
      count: count + 1,
      timestamp: new Date().toISOString()
    });
  };
  
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-medium mb-2">Analytics Demo</h3>
      <p className="text-sm text-gray-600 mb-4">
        This component demonstrates tracking events with Vercel Analytics.
        Click the button below to generate events visible in your Vercel Analytics dashboard.
      </p>
      <div className="flex items-center justify-between">
        <Button onClick={handleButtonClick}>
          Track Event ({count})
        </Button>
        <p className="text-sm text-gray-500">
          Events are tracked in real-time
        </p>
      </div>
    </div>
  );
} 