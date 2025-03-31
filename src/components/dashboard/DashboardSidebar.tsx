'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiList, 
  FiCalendar, 
  FiUsers, 
  FiSettings,
  FiBarChart2,
  FiTarget,
  FiCpu
} from 'react-icons/fi';
import { trackEvent } from '@/utils/analytics';
import { APP_NAME } from '@/utils/constants';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: FiHome },
  { name: 'Projects', href: '/dashboard/projects', icon: FiList },
  { name: 'Tasks', href: '/dashboard/tasks', icon: FiCalendar },
  { name: 'Team', href: '/dashboard/team', icon: FiUsers },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FiBarChart2 },
  { name: 'Goals', href: '/dashboard/goals', icon: FiTarget },
];

const resources = [
  { name: 'Product AI', href: '#', icon: FiCpu, action: 'openAiChat' },
  { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const handleResourceClick = (item: { action?: string }) => {
    if (item.action === 'openAiChat') {
      // The AIChat component handles its own visibility,
      // but we can trigger an event that it could listen to
      trackEvent('ai_chat_sidebar_open');
      
      // Create and dispatch a custom event that the AIChat component could listen to
      const event = new CustomEvent('open-ai-chat');
      document.dispatchEvent(event);
    }
  };

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 lg:border-r lg:border-gray-200 lg:bg-white">
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <Link 
          href="/dashboard" 
          className="flex items-center gap-2"
          onClick={() => trackEvent('dashboard_logo_click')}
        >
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">DoP</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">{APP_NAME}</span>
        </Link>
      </div>
      <nav className="flex flex-col flex-1 overflow-y-auto">
        <div className="px-4 mt-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </h2>
          <div className="mt-3 space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => trackEvent('dashboard_sidebar_navigation', { item: item.name })}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="px-4 mt-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Resources
          </h2>
          <div className="mt-3 space-y-1">
            {resources.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    trackEvent('dashboard_sidebar_resource', { item: item.name });
                    handleResourceClick(item);
                  }}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="w-full rounded-lg bg-gray-50 p-3 shadow-sm border border-gray-200">
            <p className="text-xs font-medium text-gray-700 mb-2">Get Started:</p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                <span>Create your first project</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                <span>Invite team members</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                <span>Set product goals</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
} 