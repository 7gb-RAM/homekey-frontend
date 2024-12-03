// src/pages/dashboards/FshDashboard.js

import React from 'react';
import StatCard from '../../components/dashboard/StatCard';
import TaskBoard from '../../components/dashboard/TaskBoard';
import DocumentList from '../../components/dashboard/DocumentList';
import { ClipboardDocumentListIcon, UserGroupIcon, Cog6ToothIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const FshDashboard = () => {
  const stats = [
    {
      title: 'Total Listings Approved',
      value: '15',
      subtitle: 'Ongoing approvals',
      icon: ClipboardDocumentListIcon,
    },
    {
      title: 'Active Disclosures',
      value: '20',
      subtitle: 'Pending review',
      icon: UserGroupIcon,
    },
    {
      title: 'Escrows Managed',
      value: '10',
      subtitle: 'Completed this month',
      icon: Cog6ToothIcon,
    },
    {
      title: 'Documents Processed',
      value: '50',
      subtitle: 'Includes all disclosures',
      icon: ClipboardIcon,
    },
  ];

  const tasks = [
    { title: 'Review new seller disclosures', status: 'In Progress' },
    { title: 'Approve listing: 789 Pine St', status: 'Pending' },
    { title: 'Finalize escrow details for 456 Oak Ave', status: 'Completed' },
    { title: 'Upload Natural Hazard Report for 123 Main St', status: 'In Progress' },
  ];

  const documents = [
    { title: 'Disclosures for 789 Pine St' },
    { title: 'Escrow Agreement for 456 Oak Ave' },
    { title: 'Natural Hazard Report for 123 Main St' },
    { title: 'Property Inspection Report for 321 Maple Rd' },
  ];

  return (
    <div className="flex">
      <div className="p-8 bg-white dark:bg-gray-900 min-h-screen flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FSH Dashboard</h1>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tasks</h2>
        <div className="mb-8">
          <TaskBoard tasks={tasks} />
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Documents</h2>
        <div>
          <DocumentList documents={documents} />
        </div>
      </div>
    </div>
  );
};

export default FshDashboard;