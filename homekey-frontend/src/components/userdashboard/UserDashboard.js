import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Routes, Route, Link } from 'react-router-dom';
import BuyerDashboard from '../../pages/buyer/buyerdashboard';
import SellerDashboard from '../../pages/seller/sellerdashboard';
// import FshDashboard from '../../pages/FshDashboard/FshDashboard';

const UserDashboard = () => {
  const { user } = useUser();
  const roles = user.unsafeMetadata.roles || [];
  const [currentRole, setCurrentRole] = useState(roles[0]); // Default to the first role

  if (!roles.length) {
    // If no roles are assigned, redirect to role selection
    return (
      <div>
        <p>No roles assigned.</p>
        <Link to="/select-role">Select a Role</Link>
      </div>
    );
  }

  const handleRoleChange = (event) => {
    setCurrentRole(event.target.value);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {roles.length > 1 && (
        <div>
          <label htmlFor="role-select">Switch Role:</label>
          <select id="role-select" value={currentRole} onChange={handleRoleChange}>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        {currentRole === 'buyer' && <BuyerDashboard />}
        {currentRole === 'seller' && <SellerDashboard />}
        {/* currentRole === 'fsh' && <FshDashboard /> */}
      </div>
    </div>
  );
};

export default UserDashboard;