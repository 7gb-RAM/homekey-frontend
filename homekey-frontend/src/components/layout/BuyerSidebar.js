import React, { useState } from 'react';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const BuyerSidebar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Search Listings', icon: MagnifyingGlassIcon, path: '/search' },
  ];

  return (
    <>
      <div className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200 flex flex-col flex-shrink-0">
        {/* Logo */}
        <div className="mb-8">
          <img src="/homekey-logo.png" alt="Homekey Logo" className="w-36 h-auto mb-6" />
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg mb-2 transition-colors duration-200 ${
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 z-50"
        aria-label="Toggle Chat"
      >
        {isChatOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftIcon className="h-6 w-6" />
        )}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Assistant</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-start gap-2 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-900 dark:text-white">
                  Hello! I'm your AI assistant, and I'm here to help you with the home buying
                  process. How can I assist you today?
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyerSidebar;