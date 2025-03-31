'use client';

import React from 'react';
import { FiFileText } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function PostMortemsPage() {
  return (
    <PlaceholderPage
      title="Post-Mortems"
      description="Our post-mortem templates and analysis tools will help your team learn from launches, experiments, and incidents to continuously improve your product development process."
      icon={<FiFileText size={24} />}
      pageName="post-mortems"
    />
  );
} 