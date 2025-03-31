'use client';

import { useState } from 'react';
import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';
import { Card } from '@/components/ui';

type TaskStatus = 'completed' | 'in-progress' | 'pending';

interface TaskCardProps {
  id: string | number;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate: string;
  priority?: 'low' | 'medium' | 'high';
  assignee?: string;
  onStatusChange?: (id: string | number, newStatus: TaskStatus) => void;
}

export default function TaskCard({
  id,
  title,
  description,
  status,
  dueDate,
  priority = 'medium',
  assignee,
  onStatusChange,
}: TaskCardProps) {
  const [currentStatus, setCurrentStatus] = useState<TaskStatus>(status);

  const handleStatusChange = (newStatus: TaskStatus) => {
    setCurrentStatus(newStatus);
    if (onStatusChange) {
      onStatusChange(id, newStatus);
    }
  };

  // Get status icon and color
  const getStatusInfo = () => {
    switch (currentStatus) {
      case 'completed':
        return {
          icon: <FiCheckCircle size={18} />,
          bgColor: 'bg-green-100',
          textColor: 'text-green-700',
          label: 'Completed',
        };
      case 'in-progress':
        return {
          icon: <FiClock size={18} />,
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-700',
          label: 'In Progress',
        };
      case 'pending':
        return {
          icon: <FiAlertCircle size={18} />,
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-700',
          label: 'Pending',
        };
      default:
        return {
          icon: <FiAlertCircle size={18} />,
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700',
          label: 'Unknown',
        };
    }
  };

  // Get priority color
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-orange-100 text-orange-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const { icon, bgColor, textColor, label } = getStatusInfo();
  const formattedDate = new Date(dueDate).toLocaleDateString();
  const isPastDue = new Date(dueDate) < new Date() && currentStatus !== 'completed';

  return (
    <Card variant="outline" className="bg-white hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor()}`}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </div>
        </div>
        
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div 
              className={`flex items-center space-x-1 ${textColor} px-2 py-1 rounded-full text-xs ${bgColor}`}
            >
              {icon} <span>{label}</span>
            </div>
            
            <div className={`text-xs ${isPastDue ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
              {isPastDue ? 'Past due: ' : 'Due: '}{formattedDate}
            </div>
          </div>
          
          {assignee && (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                {assignee.charAt(0).toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {onStatusChange && (
        <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 flex justify-end space-x-2">
          <button
            onClick={() => handleStatusChange('pending')}
            className={`text-xs px-2 py-1 rounded ${
              currentStatus === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => handleStatusChange('in-progress')}
            className={`text-xs px-2 py-1 rounded ${
              currentStatus === 'in-progress' ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => handleStatusChange('completed')}
            className={`text-xs px-2 py-1 rounded ${
              currentStatus === 'completed' ? 'bg-green-200 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Completed
          </button>
        </div>
      )}
    </Card>
  );
} 