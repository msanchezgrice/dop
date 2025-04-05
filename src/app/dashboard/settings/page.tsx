'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { FiUser, FiBell, FiCreditCard, FiLock, FiLogOut } from 'react-icons/fi';

export default function SettingsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data
  const [userProfile, setUserProfile] = useState({
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.j@example.com',
    jobTitle: 'Head of Product',
    company: 'Awesome Game Studio',
    avatarUrl: 'https://i.pravatar.cc/150?u=alice'
  });
  
  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        router.push('/login');
        return;
      }
      
      // In a real app, fetch user data here
      // For now, we use the mock data
      
      // Track page view
      trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard-settings' });
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save the profile data to the backend
    console.log('Saving profile:', userProfile);
    // Track event
    trackEvent('settings_profile_updated');
    alert('Profile updated successfully! (mock)');
  };

  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  const tabs = [
    { name: 'profile', label: 'Profile', icon: FiUser },
    { name: 'notifications', label: 'Notifications', icon: FiBell },
    { name: 'billing', label: 'Billing', icon: FiCreditCard },
    { name: 'security', label: 'Security', icon: FiLock },
  ];

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:w-1/4">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`group flex items-center px-3 py-2 rounded-md text-sm font-medium 
                  ${activeTab === tab.name 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <tab.icon className={`mr-3 h-5 w-5 ${activeTab === tab.name ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="lg:w-3/4">
          <div className="bg-white shadow-sm rounded-lg p-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
                <div className="flex items-center space-x-4">
                  <img className="h-16 w-16 rounded-full" src={userProfile.avatarUrl} alt="User Avatar" />
                  <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-800">Change Avatar</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={userProfile.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={userProfile.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userProfile.email}
                    onChange={handleInputChange}
                    disabled // Usually email is not editable
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={userProfile.jobTitle}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={userProfile.company}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Notifications</h2>
                <p className="text-gray-500">Notification settings are coming soon!</p>
                {/* Add notification settings form here */}
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Billing</h2>
                <p className="text-gray-500">Billing management is coming soon!</p>
                {/* Add billing information and settings here */}
              </div>
            )}
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Security</h2>
                <p className="text-gray-500">Security settings, like password change and two-factor authentication, are coming soon!</p>
                {/* Add security settings form here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 