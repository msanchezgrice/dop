'use client';

import React from 'react';
import { FiSettings } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function SettingsPage() {
  return (
    <PlaceholderPage
      title="Settings"
      description="Account settings and preferences will be available here, allowing you to customize your experience, manage integrations, and control notifications."
      icon={<FiSettings size={24} />}
      pageName="settings"
    />
  );
} 