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
              <form className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Preferences</h2>
                
                <fieldset className="space-y-4">
                  <legend className="text-base font-medium text-gray-900">Email Notifications</legend>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="email-project-updates" name="email-project-updates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="email-project-updates" className="font-medium text-gray-900">Project Updates</label>
                      <p className="text-gray-500">Get notified about major changes in projects you're part of.</p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="email-task-assignments" name="email-task-assignments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="email-task-assignments" className="font-medium text-gray-900">Task Assignments</label>
                      <p className="text-gray-500">Get notified when you are assigned a new task.</p>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="email-mentions" name="email-mentions" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="email-mentions" className="font-medium text-gray-900">Mentions</label>
                      <p className="text-gray-500">Get notified when someone mentions you in a comment.</p>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="space-y-4 pt-6 border-t border-gray-200">
                  <legend className="text-base font-medium text-gray-900">In-App Notifications</legend>
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="inapp-important" name="inapp-important" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="inapp-important" className="font-medium text-gray-900">Important Updates</label>
                      <p className="text-gray-500">Show notifications for critical system messages and updates.</p>
                    </div>
                  </div>
                   <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input id="inapp-activity" name="inapp-activity" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="inapp-activity" className="font-medium text-gray-900">Activity Feed</label>
                      <p className="text-gray-500">Show updates about team activity in the sidebar.</p>
                    </div>
                  </div>
                </fieldset>

                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    onClick={(e) => { e.preventDefault(); trackEvent('settings_notifications_updated'); alert('Notification settings saved! (mock)'); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Save Notification Settings
                  </button>
                </div>
              </form>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Plan</h2>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Pro Plan</h3>
                      <p className="text-sm text-gray-500">$49 / month</p>
                    </div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Change Plan</button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {/* Placeholder for card icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Visa ending in 1234</p>
                          <p className="text-sm text-gray-500">Expires 12/2025</p>
                        </div>
                      </div>
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Update</button>
                    </div>
                  </div>
                  <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">Add Payment Method</button>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Billing History</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th scope="col" className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th scope="col" className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Mar 1, 2024</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Pro Plan Subscription</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-right">$49.00</td>
                          <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-blue-600 hover:text-blue-800">Download</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Feb 1, 2024</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Pro Plan Subscription</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-right">$49.00</td>
                          <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-blue-600 hover:text-blue-800">Download</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h2>
                  <form className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                      <input
                        type="password"
                        name="current-password"
                        id="current-password"
                        autoComplete="current-password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                      <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        autoComplete="new-password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        autoComplete="new-password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={(e) => { e.preventDefault(); trackEvent('settings_password_changed'); alert('Password changed successfully! (mock)'); }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Two-Factor Authentication</h2>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Status: Disabled</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                    </div>
                    <button 
                      onClick={() => { trackEvent('settings_2fa_enabled'); alert('Two-Factor Authentication enabled! (mock)'); }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 