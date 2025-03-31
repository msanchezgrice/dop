'use client';

import Link from 'next/link';
import { FiUsers, FiCalendar, FiCheckSquare, FiClock } from 'react-icons/fi';
import { Card } from '@/components/ui';

interface ProjectCardProps {
  id: string | number;
  name: string;
  description?: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  dueDate: string;
  teamMembers?: { id: string | number; name: string; avatar?: string }[];
}

export default function ProjectCard({
  id,
  name,
  description,
  progress,
  totalTasks,
  completedTasks,
  dueDate,
  teamMembers = [],
}: ProjectCardProps) {
  const formattedDueDate = new Date(dueDate).toLocaleDateString();
  const isOverdue = new Date(dueDate) < new Date() && progress < 100;
  
  // Get progress status color
  const getProgressColor = () => {
    if (progress >= 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card variant="outline" className="bg-white hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <Link href={`/dashboard/projects/${id}`} className="hover:text-blue-600">
            <h3 className="font-medium text-lg text-gray-900">{name}</h3>
          </Link>
          <div className={`text-xs font-medium px-2 py-1 rounded-full ${
            isOverdue ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {isOverdue ? 'Overdue' : 'Active'}
          </div>
        </div>
        
        {description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 font-medium">Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full ${getProgressColor()}`} 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FiCheckSquare className="mr-2 text-green-500" />
            <span>{completedTasks}/{totalTasks} tasks</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FiClock className="mr-2 text-blue-500" />
            <span>{totalTasks - completedTasks} remaining</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FiCalendar className="mr-2 text-gray-500" />
            <span className={isOverdue ? 'text-red-600 font-medium' : ''}>
              {formattedDueDate}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-2 text-purple-500" />
            <span>{teamMembers.length} members</span>
          </div>
        </div>
        
        {teamMembers.length > 0 && (
          <div className="flex -space-x-2 overflow-hidden">
            {teamMembers.slice(0, 5).map((member) => (
              <div 
                key={member.id}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300 flex items-center justify-center text-xs text-gray-700 overflow-hidden"
                title={member.name}
              >
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  member.name.charAt(0).toUpperCase()
                )}
              </div>
            ))}
            {teamMembers.length > 5 && (
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                +{teamMembers.length - 5}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between">
        <Link 
          href={`/dashboard/projects/${id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Details
        </Link>
        <Link 
          href={`/dashboard/projects/${id}/tasks`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Tasks
        </Link>
      </div>
    </Card>
  );
} 