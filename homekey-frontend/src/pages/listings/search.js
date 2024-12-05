// src/pages/Search.js

import React, { useEffect, useState } from 'react';
import PropertyCardBuyer from '../../components/dashboard/PropertyCardBuyer'; // Adjust the import path as needed
import property2Image from '../../assets/property2.png'; // Ensure the image path is correct
import { toast } from 'react-toastify'; // Import toast for notifications
import SearchBar from '../../components/searchbar';

export default function Search() {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  // Fetch all listings from the API
  const getAllListings = async () => {
    try {
      const userId = localStorage.getItem('user_id');
      const response = await fetch(`http://localhost:5001/listings/get_all_listings?user_id=${userId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching listings:', error);
      toast.error('Failed to fetch property listings.');
      return [];
    }
  };

  // Fetch listings on component mount
  useEffect(() => {
    const fetchData = async () => {
      const listings = await getAllListings();
      setAllListings(listings);
      setFilteredListings(listings); // Initialize filtered listings with all listings
    };

    fetchData();

    console.log('All Listings:', allListings);
  }, []);

  // Handle search from SearchBar
  const handleSearch = ({ minPrice, maxPrice }) => {
    let filtered = allListings;

    if (minPrice) {
      filtered = filtered.filter((property) => parseFloat(property.price) >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((property) => parseFloat(property.price) <= parseFloat(maxPrice));
    }

    setFilteredListings(filtered);
  };

  // Handle save/un-save functionality
  const handleSave = (propertyId) => {
    // Update the 'saved' status of the property in the filteredListings state
    const updatedListings = filteredListings.map((property) => {
      if (property.id === propertyId) {
        // Toggle the 'saved' property; if it doesn't exist, initialize it
        return { ...property, saved: !property.saved };
      }
      return property;
    });

    setFilteredListings(updatedListings);
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8 bg-white dark:bg-gray-900 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Search Listings</h1>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="flex justify-between items-center mb-8">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">Search Results</h5>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((property) => (
              <PropertyCardBuyer
                key={property.id}
                coverImage={property2Image} // Using property2Image for all properties
                address={property.address}
                price={parseFloat(property.price)} // Convert price to number
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                squareFootage={property.squarefootage}
                saved={property.saved || false} // Default to false if 'saved' is undefined
                onSave={() => handleSave(property.id)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
}