'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RootLayout } from '@/components/layout';
import { Button, Container, Heading, Card } from '@/components/ui';
import { TaskCard } from '@/components/dashboard';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';

// Define the task type
type TaskStatus = 'completed' | 'in-progress' | 'pending';
type TaskPriority = 'high' | 'medium' | 'low';

interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  priority: TaskPriority;
  assignee: string;
}

// Mock tasks data
const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Update landing page content',
    description: 'Update the content on the landing page to match the new brand guidelines.',
    status: 'in-progress',
    dueDate: '2023-07-05',
    priority: 'high',
    assignee: 'John',
  },
  {
    id: 2,
    title: 'Fix mobile navigation bug',
    description: 'Menu doesn\'t close properly on mobile after clicking a link.',
    status: 'pending',
    dueDate: '2023-07-12',
    priority: 'medium',
    assignee: 'Sarah',
  },
  {
    id: 3,
    title: 'Create new email template',
    description: 'Design and code a new responsive email template for the newsletter.',
    status: 'completed',
    dueDate: '2023-06-30',
    priority: 'medium',
    assignee: 'Mike',
  },
  {
    id: 4,
    title: 'Set up analytics tracking',
    description: 'Implement Google Analytics 4 on all pages.',
    status: 'pending',
    dueDate: '2023-07-08',
    priority: 'high',
    assignee: 'Lisa',
  },
  {
    id: 5,
    title: 'Optimize image assets',
    description: 'Compress all images to improve page load speed.',
    status: 'in-progress',
    dueDate: '2023-07-10',
    priority: 'low',
    assignee: 'John',
  },
  {
    id: 6,
    title: 'Write API documentation',
    description: 'Create comprehensive documentation for the new API endpoints.',
    status: 'pending',
    dueDate: '2023-07-15',
    priority: 'medium',
    assignee: 'Sarah',
  },
];

type TaskFilter = 'all' | TaskStatus;
type PriorityFilter = 'all' | TaskPriority;

export default function TasksPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [statusFilter, setStatusFilter] = useState<TaskFilter>('all');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    setIsLoading(false);
    
    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'tasks' });
  }, [router]);

  const handleStatusChange = (id: string | number, newStatus: TaskStatus) => {
    // Track task status change
    trackEvent(AnalyticsEvents.TASK_STATUS_CHANGE, {
      task_id: id.toString(),
      new_status: newStatus
    });
    
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  // Filter tasks based on status, priority, and search term
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

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
              <Heading level={1} size="3xl">Tasks</Heading>
              <p className="text-gray-600 mt-2">Manage and track your tasks</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>
                <FiPlus className="mr-2" /> New Task
              </Button>
            </div>
          </div>

          {/* Filters & Search */}
          <Card variant="outline" className="mb-8">
            <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="status-filter" className="block text-xs text-gray-500 mb-1">
                  Status
                </label>
                <select
                  id="status-filter"
                  className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as TaskFilter)}
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priority-filter" className="block text-xs text-gray-500 mb-1">
                  Priority
                </label>
                <select
                  id="priority-filter"
                  className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value as PriorityFilter)}
                >
                  <option value="all">All</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  assignee={task.assignee}
                  onStatusChange={handleStatusChange}
                />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
                <FiFilter className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <div className="mt-6">
                  <Button variant="outline" size="sm" onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('all');
                    setPriorityFilter('all');
                  }}>
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </RootLayout>
  );
} 