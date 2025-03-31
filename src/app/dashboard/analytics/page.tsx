'use client';

import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function AnalyticsPage() {
  return (
    <PlaceholderPage
      title="Analytics"
      description="Our advanced analytics dashboard is currently under development. Soon you'll be able to access deep insights into your product metrics, user behavior, and performance indicators."
      icon={<FiBarChart2 size={24} />}
      pageName="analytics"
    />
  );
} 