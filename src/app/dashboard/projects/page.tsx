'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RootLayout } from '@/components/layout';
import { Button, Card, Container, Heading } from '@/components/ui';
import { ProjectCard } from '@/components/dashboard';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { FiFilter, FiPlus, FiSearch } from 'react-icons/fi';

// Type definitions
interface TeamMember {
  id: number;
  name: string;
  avatar?: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  dueDate: string;
  teamMembers: TeamMember[];
}

// Mock projects data
const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete redesign of the company website to improve user experience and brand identity.',
    progress: 42,
    totalTasks: 12,
    completedTasks: 5,
    dueDate: '2023-07-30',
    teamMembers: [
      { id: 1, name: 'John Smith' },
      { id: 2, name: 'Sarah Johnson' },
      { id: 3, name: 'Michael Brown' },
      { id: 4, name: 'Lisa Davis' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Develop a cross-platform mobile application for iOS and Android.',
    progress: 75,
    totalTasks: 24,
    completedTasks: 18,
    dueDate: '2023-08-15',
    teamMembers: [
      { id: 2, name: 'Sarah Johnson' },
      { id: 3, name: 'Michael Brown' },
      { id: 5, name: 'David Wilson' },
    ],
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    description: 'Launch a comprehensive digital marketing campaign for Q3.',
    progress: 25,
    totalTasks: 8,
    completedTasks: 2,
    dueDate: '2023-06-10',
    teamMembers: [
      { id: 1, name: 'John Smith' },
      { id: 4, name: 'Lisa Davis' },
      { id: 6, name: 'Emma Taylor' },
    ],
  },
  {
    id: 4,
    name: 'Product Launch',
    description: 'Coordinate the launch of our new flagship product.',
    progress: 10,
    totalTasks: 18,
    completedTasks: 2,
    dueDate: '2023-09-01',
    teamMembers: [
      { id: 1, name: 'John Smith' },
      { id: 2, name: 'Sarah Johnson' },
      { id: 4, name: 'Lisa Davis' },
      { id: 5, name: 'David Wilson' },
      { id: 6, name: 'Emma Taylor' },
    ],
  },
  {
    id: 5,
    name: 'Customer Survey',
    description: 'Conduct a comprehensive customer satisfaction survey.',
    progress: 100,
    totalTasks: 6,
    completedTasks: 6,
    dueDate: '2023-05-20',
    teamMembers: [
      { id: 4, name: 'Lisa Davis' },
      { id: 6, name: 'Emma Taylor' },
    ],
  },
  {
    id: 6,
    name: 'Infrastructure Upgrade',
    description: 'Upgrade our server infrastructure to support increased traffic.',
    progress: 60,
    totalTasks: 10,
    completedTasks: 6,
    dueDate: '2023-07-15',
    teamMembers: [
      { id: 3, name: 'Michael Brown' },
      { id: 5, name: 'David Wilson' },
    ],
  },
];

type StatusFilter = 'all' | 'active' | 'completed' | 'overdue';

export default function ProjectsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    setIsLoading(false);
    
    // Track page view
    trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'projects' });
  }, [router]);

  // Function to create a new project
  const handleCreateProject = () => {
    // In a real app, this would open a modal or navigate to a create project page
    // For demo purposes, we'll just log to console
    console.log('Create project clicked');
    
    // Example of how setProjects would be used in a real implementation
    const newProject: Project = {
      id: projects.length + 1,
      name: 'New Project',
      description: 'Description for the new project',
      progress: 0,
      totalTasks: 0,
      completedTasks: 0,
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      teamMembers: [],
    };
    
    // Track project creation
    trackEvent(AnalyticsEvents.PROJECT_CREATE, { project_id: newProject.id.toString() });
    
    setProjects([...projects, newProject]);
  };

  // Filter projects based on status and search term
  const filteredProjects = projects.filter((project) => {
    const now = new Date();
    const dueDate = new Date(project.dueDate);
    
    // Status filtering
    if (statusFilter === 'completed' && project.progress < 100) {
      return false;
    }
    if (statusFilter === 'active' && (project.progress >= 100 || dueDate < now)) {
      return false;
    }
    if (statusFilter === 'overdue' && (project.progress >= 100 || dueDate >= now)) {
      return false;
    }
    
    // Search filtering
    if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !project.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
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
              <Heading level={1} size="3xl">Projects</Heading>
              <p className="text-gray-600 mt-2">Manage and track your projects</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button onClick={handleCreateProject}>
                <FiPlus className="mr-2" /> New Project
              </Button>
            </div>
          </div>

          {/* Filters & Search */}
          <Card variant="outline" className="mb-8">
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
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
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                >
                  <option value="all">All Projects</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  progress={project.progress}
                  totalTasks={project.totalTasks}
                  completedTasks={project.completedTasks}
                  dueDate={project.dueDate}
                  teamMembers={project.teamMembers}
                />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
                <FiFilter className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <div className="mt-6">
                  <Button variant="outline" size="sm" onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('all');
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