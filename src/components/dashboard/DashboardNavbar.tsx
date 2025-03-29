"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  FiHome, 
  FiBarChart2, 
  FiLayers, 
  FiUsers, 
  FiClipboard, 
  FiSettings, 
  FiLogOut,
  FiMenu,
  FiX
} from 'react-icons/fi';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: FiHome },
  { name: 'Metrics Analysis', href: '/dashboard/metrics', icon: FiBarChart2 },
  { name: 'Feature Prioritization', href: '/dashboard/features', icon: FiLayers },
  { name: 'Team Structure', href: '/dashboard/team', icon: FiUsers },
  { name: 'Post-Mortems', href: '/dashboard/post-mortems', icon: FiClipboard },
  { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
];

export default function DashboardNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if current path is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + '/');
  };
  
  const handleSignOut = () => {
    // In a real app, you'd call your auth service to sign out
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    router.push('/login');
  };
  
  // Get user data from localStorage (for demo)
  let user;
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    user = userData ? JSON.parse(userData) : null;
  }
  
  return (
    <>
      {/* Mobile menu toggle button */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white border-b border-slate-200 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/dashboard" className="flex items-center">
            <span className="text-blue-600 font-bold text-xl">CPO.AI</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-700 hover:text-blue-600"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transition-transform duration-300 transform lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-5 border-b border-slate-200">
            <Link href="/dashboard" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">CPO.AI</span>
            </Link>
          </div>
          
          {/* User info */}
          {user && (
            <div className="px-6 py-4 border-b border-slate-200">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-slate-500">{user.companyName}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon 
                  className={`mr-3 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-500'}`} 
                  size={18} 
                />
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Sign out button */}
          <div className="px-3 py-4 border-t border-slate-200">
            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-slate-900"
            >
              <FiLogOut className="mr-3 text-slate-500" size={18} />
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
} 