'use client';

import React from 'react';
import { FiTarget } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function GoalsPage() {
  return (
    <PlaceholderPage
      title="Product Goals"
      description="Our goal-setting and OKR tracking system will help you align your team around key objectives and measure progress towards your product vision."
      icon={<FiTarget size={24} />}
      pageName="goals"
    />
  );
} 