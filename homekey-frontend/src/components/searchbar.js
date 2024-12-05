// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
      alert('Minimum price cannot be greater than maximum price.');
      return;
    }
    // Pass the search criteria to the parent component
    onSearch({ minPrice, maxPrice });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Minimum Price */}
        <div className="flex items-center">
          <label htmlFor="minPrice" className="text-gray-700 dark:text-gray-300 mr-2">
            Min Price ($)
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="100,000"
            className="w-30 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
            min="0"
          />
        </div>

        {/* Maximum Price */}
        <div className="flex items-center">
          <label htmlFor="maxPrice" className="text-gray-700 dark:text-gray-300 mr-2">
            Max Price ($)
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="500,000"
            className="w-30 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
            min="0"
          />
        </div>

        {/* Search Button */}
        <div className="mt-4 sm:mt-0 sm:ml-auto">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;