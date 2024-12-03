import React, { useState } from 'react';
import StatCard from '../../components/dashboard/StatCard';
import TaskBoard from '../../components/dashboard/TaskBoard';
import { HomeIcon, HeartIcon, EyeIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

// Import images from src/assets
import property1Image from '../../assets/property1.png';
import property2Image from '../../assets/property2.png';
import PropertyCardBuyer from '../../components/dashboard/PropertyCardBuyer';

const BuyerDashboard = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      coverImage: property1Image,
      address: '123 Maple Street, Springfield, USA',
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1800,
      saved: true,
    },
    {
      id: 2,
      coverImage: property2Image,
      address: '456 Oak Avenue, Shelbyville, USA',
      price: 525000,
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2200,
      saved: false,
    },
  ]);

  const stats = [
    {
      title: 'Saved Properties',
      value: '8',
      subtitle: '2 New this week',
      icon: HeartIcon,
    },
    {
      title: 'Viewed Properties',
      value: '20',
      subtitle: '↑ 5% from last week',
      icon: EyeIcon,
    },
    {
      title: 'Scheduled Tours',
      value: '3',
      subtitle: 'Next tour on Friday',
      icon: CalendarDaysIcon,
    },
    {
      title: 'Offers Made',
      value: '1',
      subtitle: 'Pending response',
      icon: HomeIcon,
    },
  ];

  const tasks = [
    { title: 'Get pre-approved for a mortgage', status: 'Completed' },
    { title: 'Schedule property tours', status: 'In Progress' },
    { title: 'Review property disclosures', status: 'Pending' },
  ];

  const handleSaveProperty = (propertyId) => {
    // Toggle the saved state of the property
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === propertyId ? { ...property, saved: !property.saved } : property
      )
    );
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-white dark:bg-gray-900 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Buyer Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Recommended Properties
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {properties.map((property) => (
            <PropertyCardBuyer
              key={property.id}
              {...property}
              onSave={() => handleSaveProperty(property.id)}
            />
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Tasks</h2>
        <TaskBoard tasks={tasks} />
      </div>
    </div>
  );
};

export default BuyerDashboard;