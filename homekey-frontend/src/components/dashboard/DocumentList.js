import React from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const DocumentList = ({ documents }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Documents</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LightBulbIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">{doc.title}</span>
            </div>
            <button className="text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
