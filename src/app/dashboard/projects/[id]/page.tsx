'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RootLayout } from '@/components/layout';
import { Button, Card, Container, Heading } from '@/components/ui';
import { TaskCard } from '@/components/dashboard';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiUsers, 
  FiEdit2, 
  FiTrash2,
  FiCheckSquare,
  FiClock,
  FiPlus
} from 'react-icons/fi';

// Type definitions
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

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  tasks: Task[];
  teamMembers: TeamMember[];
  progress: number;
}

// Mock project data
const mockProject: Project = {
  id: 1,
  name: 'Website Redesign',
  description: 'Complete redesign of the company website to improve user experience, increase conversions, and update the brand identity. The project includes new visual design, content strategy, and responsive implementation.',
  startDate: '2023-05-01',
  dueDate: '2023-07-30',
  progress: 42,
  teamMembers: [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Project Manager' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'UI Designer' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Frontend Developer' },
    { id: 4, name: 'Lisa Davis', email: 'lisa@example.com', role: 'Content Strategist' },
  ],
  tasks: [
    {
      id: 1,
      title: 'Design homepage mockup',
      description: 'Create a high-fidelity mockup of the homepage based on the approved wireframes.',
      status: 'completed',
      dueDate: '2023-05-15',
      priority: 'high',
      assignee: 'Sarah',
    },
    {
      id: 2,
      title: 'Create content strategy document',
      description: 'Develop a comprehensive content strategy including messaging hierarchy and tone of voice.',
      status: 'completed',
      dueDate: '2023-05-20',
      priority: 'medium',
      assignee: 'Lisa',
    },
    {
      id: 3,
      title: 'Implement responsive navigation',
      description: 'Code the responsive navigation menu with mobile-first approach.',
      status: 'in-progress',
      dueDate: '2023-06-10',
      priority: 'high',
      assignee: 'Michael',
    },
    {
      id: 4,
      title: 'Write homepage copy',
      description: 'Write compelling copy for the homepage based on the content strategy.',
      status: 'in-progress',
      dueDate: '2023-06-15',
      priority: 'medium',
      assignee: 'Lisa',
    },
    {
      id: 5,
      title: 'Implement contact form',
      description: 'Create a contact form with validation and connect it to the email service.',
      status: 'pending',
      dueDate: '2023-06-25',
      priority: 'medium',
      assignee: 'Michael',
    },
    {
      id: 6,
      title: 'SEO optimization',
      description: 'Optimize the website for search engines including meta tags, semantic markup, and site speed.',
      status: 'pending',
      dueDate: '2023-07-10',
      priority: 'high',
      assignee: 'John',
    },
  ],
};

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'team'>('overview');

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    // In a real app, fetch project data from API
    // For demo, we'll use mock data
    setProject(mockProject);
    setIsLoading(false);
    
    // Track project view
    trackEvent(AnalyticsEvents.PROJECT_VIEW, { 
      project_id: params.id,
      project_name: mockProject.name
    });
  }, [router, params.id]);

  const handleStatusChange = (id: string | number, newStatus: TaskStatus) => {
    if (!project) return;

    // Track task status change
    trackEvent(AnalyticsEvents.TASK_STATUS_CHANGE, {
      task_id: id.toString(),
      project_id: params.id,
      new_status: newStatus
    });

    setProject({
      ...project,
      tasks: project.tasks.map((task) => 
        task.id === id ? { ...task, status: newStatus } : task
      ),
    });
  };

  // Calculate stats
  const calculateStats = () => {
    if (!project) return { completed: 0, inProgress: 0, pending: 0, overdue: 0 };

    const now = new Date();
    let completed = 0;
    let inProgress = 0;
    let pending = 0;
    let overdue = 0;

    project.tasks.forEach((task) => {
      if (task.status === 'completed') {
        completed++;
      } else if (task.status === 'in-progress') {
        inProgress++;
      } else if (task.status === 'pending') {
        pending++;
      }

      // Check if task is overdue
      const dueDate = new Date(task.dueDate);
      if (dueDate < now && task.status !== 'completed') {
        overdue++;
      }
    });

    return { completed, inProgress, pending, overdue };
  };

  // Show nothing while checking authentication
  if (isLoading || !project) {
    return null;
  }

  const { completed, inProgress, pending, overdue } = calculateStats();

  return (
    <RootLayout>
      <div className="bg-gray-50 min-h-screen py-8">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center">
              <Link href="/dashboard/projects" className="text-gray-500 hover:text-gray-700 mr-4">
                <FiArrowLeft size={20} />
              </Link>
              <div>
                <Heading level={1} size="3xl">{project.name}</Heading>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline">
                <FiEdit2 className="mr-2" /> Edit Project
              </Button>
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                <FiTrash2 className="mr-2" /> Delete
              </Button>
            </div>
          </div>

          {/* Project Info Card */}
          <Card variant="outline" className="mb-8">
            <div className="p-6">
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <FiCalendar className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Start Date</p>
                    <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Due Date</p>
                    <p className="font-medium">{new Date(project.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiUsers className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Team Members</p>
                    <p className="font-medium">{project.teamMembers.length} members</p>
                  </div>
                </div>
              </div>

              <div className="mb-2 flex justify-between items-center">
                <p className="text-sm font-medium text-gray-700">Progress</p>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-blue-600" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'tasks'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Tasks
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'team'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Team
                </button>
              </nav>
            </div>
          </div>

          {/* Tab content */}
          {activeTab === 'overview' && (
            <div>
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card variant="elevated" className="bg-white">
                  <div className="p-6 flex items-center">
                    <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                      <FiCheckSquare size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Completed</p>
                      <h3 className="text-2xl font-bold mt-1">{completed}</h3>
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
                      <h3 className="text-2xl font-bold mt-1">{inProgress}</h3>
                    </div>
                  </div>
                </Card>
                
                <Card variant="elevated" className="bg-white">
                  <div className="p-6 flex items-center">
                    <div className="rounded-full p-3 bg-yellow-100 text-yellow-600 mr-4">
                      <FiClock size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Pending</p>
                      <h3 className="text-2xl font-bold mt-1">{pending}</h3>
                    </div>
                  </div>
                </Card>
                
                <Card variant="elevated" className="bg-white">
                  <div className="p-6 flex items-center">
                    <div className="rounded-full p-3 bg-red-100 text-red-600 mr-4">
                      <FiCalendar size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Overdue</p>
                      <h3 className="text-2xl font-bold mt-1">{overdue}</h3>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Tasks */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <Heading level={2} size="lg">Recent Tasks</Heading>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab('tasks')}>
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.tasks.slice(0, 4).map((task) => (
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
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Heading level={2} size="lg">Team Members</Heading>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab('team')}>
                    View All
                  </Button>
                </div>
                <Card variant="outline">
                  <ul className="divide-y divide-gray-200">
                    {project.teamMembers.map((member) => (
                      <li key={member.id} className="p-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-3">
                          {member.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <Heading level={2} size="lg">All Tasks</Heading>
                <Button>
                  <FiPlus className="mr-2" /> Add Task
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.tasks.map((task) => (
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
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <Heading level={2} size="lg">Team Members</Heading>
                <Button>
                  <FiPlus className="mr-2" /> Add Member
                </Button>
              </div>
              <Card variant="outline">
                <ul className="divide-y divide-gray-200">
                  {project.teamMembers.map((member) => (
                    <li key={member.id} className="p-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-4">
                          {member.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                          <p className="text-sm text-gray-400">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-500">
                          <FiEdit2 size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-red-500">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </Container>
      </div>
    </RootLayout>
  );
} 