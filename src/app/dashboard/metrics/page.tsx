'use client';

import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function MetricsPage() {
  return (
    <PlaceholderPage
      title="Key Metrics"
      description="Our comprehensive metrics dashboard will provide real-time visibility into your most important KPIs, including retention, engagement, and monetization metrics."
      icon={<FiTrendingUp size={24} />}
      pageName="metrics"
    />
  );
} 