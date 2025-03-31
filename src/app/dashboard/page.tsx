'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RootLayout } from '@/components/layout';
import { Button, Card, Container, Heading } from '@/components/ui';
import { isAuthenticated, removeToken } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { AnalyticsDemo } from '@/components/common/AnalyticsDemo';
import { FiPlus, FiCheckSquare, FiClock, FiAlertCircle } from 'react-icons/fi';

// Mock data for the dashboard
const mockProjects = [
  { id: 1, name: 'Website Redesign', tasks: 12, completed: 5, dueDate: '2023-07-15' },
  { id: 2, name: 'Mobile App Development', tasks: 24, completed: 18, dueDate: '2023-08-30' },
  { id: 3, name: 'Marketing Campaign', tasks: 8, completed: 2, dueDate: '2023-06-10' },
];

const mockTasks = [
  { id: 1, title: 'Design Landing Page', status: 'completed', project: 'Website Redesign', dueDate: '2023-06-05' },
  { id: 2, title: 'Implement User Authentication', status: 'in-progress', project: 'Mobile App Development', dueDate: '2023-06-12' },
  { id: 3, title: 'Create Email Templates', status: 'pending', project: 'Marketing Campaign', dueDate: '2023-06-08' },
  { id: 4, title: 'QA Testing', status: 'in-progress', project: 'Mobile App Development', dueDate: '2023-06-20' },
  { id: 5, title: 'Update Content', status: 'pending', project: 'Website Redesign', dueDate: '2023-06-10' },
];

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    setIsLoading(false);
    
    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard' });
  }, [router]);

  const handleLogout = () => {
    // Track logout event
    trackEvent(AnalyticsEvents.LOGOUT);
    
    removeToken();
    router.push('/login');
  };

  // Show nothing while checking authentication
  if (isLoading) {
    return null;
  }

  return (
    <RootLayout>
      <div className="bg-gray-50 min-h-screen py-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <Heading level={1} size="3xl">Dashboard</Heading>
              <p className="text-gray-600 mt-2">Welcome back! Here&apos;s an overview of your projects.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
              <Button>
                <FiPlus className="mr-2" /> New Project
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card variant="elevated" className="bg-white">
              <div className="p-6 flex items-center">
                <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                  <FiCheckSquare size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Completed Tasks</p>
                  <h3 className="text-2xl font-bold mt-1">25</h3>
                </div>
              </div>
            </Card>
            
            <Card variant="elevated" className="bg-white">
              <div className="p-6 flex items-center">
                <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                  <FiClock size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">In Progress</p>
                  <h3 className="text-2xl font-bold mt-1">12</h3>
                </div>
              </div>
            </Card>
            
            <Card variant="elevated" className="bg-white">
              <div className="p-6 flex items-center">
                <div className="rounded-full p-3 bg-red-100 text-red-600 mr-4">
                  <FiAlertCircle size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Upcoming Deadlines</p>
                  <h3 className="text-2xl font-bold mt-1">7</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <Heading level={2} size="xl">Your Projects</Heading>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map((project) => (
                <Card key={project.id} variant="outline" className="bg-white">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{project.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Tasks</p>
                        <p className="font-medium">{project.tasks}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Completed</p>
                        <p className="font-medium">{project.completed}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Progress</p>
                        <p className="font-medium">{Math.round((project.completed / project.tasks) * 100)}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Due Date</p>
                        <p className="font-medium">{new Date(project.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${Math.round((project.completed / project.tasks) * 100)}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Tasks */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <Heading level={2} size="xl">Recent Tasks</Heading>
              <Button variant="outline" size="sm">
                Add Task
              </Button>
            </div>
            
            <Card variant="outline" className="bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Task
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Project
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Due Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockTasks.map((task) => (
                      <tr key={task.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{task.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{task.project}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${task.status === 'completed' ? 'bg-green-100 text-green-800' : 
                            task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                            {task.status === 'completed' ? 'Completed' : 
                            task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(task.dueDate).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Analytics Demo */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <Heading level={2} size="xl">Analytics Integration</Heading>
            </div>
            <AnalyticsDemo />
          </div>
        </Container>
      </div>
    </RootLayout>
  );
} 