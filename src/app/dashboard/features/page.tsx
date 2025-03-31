'use client';

import React from 'react';
import { FiLayers } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function FeaturesPage() {
  return (
    <PlaceholderPage
      title="Feature Prioritization"
      description="Our feature prioritization tools are coming soon. You'll be able to rank features, evaluate their impact, and make data-driven decisions about what to build next."
      icon={<FiLayers size={24} />}
      pageName="features"
    />
  );
} 