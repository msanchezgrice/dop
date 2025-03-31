'use client';

import React from 'react';
import { FiUsers } from 'react-icons/fi';
import PlaceholderPage from '@/components/dashboard/PlaceholderPage';

export default function TeamPage() {
  return (
    <PlaceholderPage
      title="Team Management"
      description="Soon you'll be able to invite team members, assign roles, and collaborate effectively on product initiatives using our team management tools."
      icon={<FiUsers size={24} />}
      pageName="team"
    />
  );
} 