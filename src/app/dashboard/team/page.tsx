'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';
import { FiPlus, FiSearch, FiUser } from 'react-icons/fi';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Product Manager' | 'Designer' | 'Engineer' | 'Analyst';
  avatarUrl?: string;
  status: 'active' | 'invited' | 'inactive';
}

const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    role: 'Admin',
    avatarUrl: 'https://i.pravatar.cc/150?u=alice',
    status: 'active'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.s@example.com',
    role: 'Product Manager',
    avatarUrl: 'https://i.pravatar.cc/150?u=bob',
    status: 'active'
  },
  {
    id: '3',
    name: 'Charlie Davis',
    email: 'charlie.d@example.com',
    role: 'Engineer',
    status: 'invited'
  },
  {
    id: '4',
    name: 'Diana Evans',
    email: 'diana.e@example.com',
    role: 'Designer',
    avatarUrl: 'https://i.pravatar.cc/150?u=diana',
    status: 'active'
  },
  {
    id: '5',
    name: 'Ethan Garcia',
    email: 'ethan.g@example.com',
    role: 'Analyst',
    avatarUrl: 'https://i.pravatar.cc/150?u=ethan',
    status: 'inactive'
  },
];

export default function TeamPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
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
      trackEvent(AnalyticsEvents.PAGE_VIEW, { page: 'dashboard-team' });
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);
  
  const filteredTeamMembers = mockTeamMembers.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }
  
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
        <div className="flex gap-2">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-3 pr-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Search team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FiPlus size={16} />
            <span>Invite Member</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        {member.avatarUrl ? (
                          <img className="h-10 w-10 rounded-full" src={member.avatarUrl} alt="" />
                        ) : (
                          <span className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <FiUser className="h-6 w-6 text-gray-500" />
                          </span>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${member.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                      ${member.status === 'invited' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${member.status === 'inactive' ? 'bg-gray-100 text-gray-800' : ''}
                    `}>
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTeamMembers.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No team members found matching your search.
          </div>
        )}
      </div>
    </div>
  );
} 