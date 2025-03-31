'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'to_do' | 'in_progress' | 'done' | 'blocked';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate: string;
  assignedTo: string;
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Improve user onboarding flow',
    description: 'Optimize the first-time user experience to improve D1 retention',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2023-12-15',
    assignedTo: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Implement battle pass feature',
    description: 'Create a seasonal battle pass system with rewards',
    status: 'to_do',
    priority: 'medium',
    dueDate: '2023-12-30',
    assignedTo: 'Mike Chen'
  },
  {
    id: '3',
    title: 'Analyze retention metrics',
    description: 'Deep dive into D7 and D30 retention metrics to identify drop-off points',
    status: 'done',
    priority: 'high',
    dueDate: '2023-12-01',
    assignedTo: 'You'
  },
  {
    id: '4',
    title: 'Update monetization strategy',
    description: 'Revise IAP pricing and bundles based on latest market trends',
    status: 'blocked',
    priority: 'urgent',
    dueDate: '2023-12-10',
    assignedTo: 'Jennifer Wong'
  },
];

export default function TasksPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        router.push('/login');
        return;
      }
      
      // Track page view
      trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard-tasks' });
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);
  
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
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Add New Task
        </button>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
        <div className="flex border-b border-gray-200">
          <button className="px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            All Tasks
          </button>
          <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            My Tasks
          </button>
          <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            Completed
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{task.title}</div>
                    <div className="text-sm text-gray-500">{task.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${task.status === 'to_do' ? 'bg-gray-100 text-gray-800' : ''}
                      ${task.status === 'in_progress' ? 'bg-blue-100 text-blue-800' : ''}
                      ${task.status === 'done' ? 'bg-green-100 text-green-800' : ''}
                      ${task.status === 'blocked' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {task.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${task.priority === 'low' ? 'bg-gray-100 text-gray-800' : ''}
                      ${task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${task.priority === 'high' ? 'bg-orange-100 text-orange-800' : ''}
                      ${task.priority === 'urgent' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.assignedTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 