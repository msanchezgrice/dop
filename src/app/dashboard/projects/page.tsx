'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'on_hold';
  progress: number;
  tasks: { total: number; completed: number };
  dueDate: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Game Onboarding Optimization',
    description: 'Improve the new player experience to boost D1 retention rates',
    status: 'active',
    progress: 75,
    tasks: { total: 12, completed: 9 },
    dueDate: '2023-12-15'
  },
  {
    id: '2',
    name: 'Monetization Strategy Revamp',
    description: 'Update IAP offerings and implement battle pass system',
    status: 'planning',
    progress: 10,
    tasks: { total: 8, completed: 1 },
    dueDate: '2024-01-30'
  },
  {
    id: '3',
    name: 'User Retention Analysis',
    description: 'Deep dive into churn points and implement retention hooks',
    status: 'completed',
    progress: 100,
    tasks: { total: 6, completed: 6 },
    dueDate: '2023-11-20'
  },
  {
    id: '4',
    name: 'Social Features Integration',
    description: 'Add friend system, clans, and social events',
    status: 'on_hold',
    progress: 35,
    tasks: { total: 15, completed: 5 },
    dueDate: '2024-02-28'
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        router.push('/login');
        return;
      }
      
      // Track page view
      trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard-projects' });
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);
  
  const filteredProjects = mockProjects.filter(project => {
    // Apply status filter
    if (filter !== 'all' && project.status !== filter) {
      return false;
    }
    
    // Apply search filter
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !project.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Create New Project
        </button>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative rounded-md shadow-sm flex-1">
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 pr-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="flex">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')} 
            className={`px-4 py-2 text-sm font-medium ${filter === 'active' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'}`}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('planning')} 
            className={`px-4 py-2 text-sm font-medium ${filter === 'planning' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'}`}
          >
            Planning
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'}`}
          >
            Completed
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
            <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <span 
                    className={`px-2 py-1 text-xs font-semibold rounded-full 
                      ${project.status === 'planning' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${project.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      ${project.status === 'completed' ? 'bg-blue-100 text-blue-800' : ''}
                      ${project.status === 'on_hold' ? 'bg-gray-100 text-gray-800' : ''}
                    `}
                  >
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{project.description}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                <div className="mt-1">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <div>Progress</div>
                    <div>{project.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{project.tasks.completed}</span>
                    /{project.tasks.total} tasks
                  </div>
                  <div className="text-sm text-gray-500">
                    Due: {new Date(project.dueDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-500">Try adjusting your filters or create a new project.</p>
        </div>
      )}
    </div>
  );
} 