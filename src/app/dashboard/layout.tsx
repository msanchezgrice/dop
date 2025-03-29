"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardNavbar from '../../components/dashboard/DashboardNavbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  
  // Check if user is logged in (for demo)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />
      
      <div className="lg:pl-64 pt-16 lg:pt-0">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
} 