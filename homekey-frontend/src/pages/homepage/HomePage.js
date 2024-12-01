// src/pages/HomePage/HomePage.js
import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <h1>Welcome to the App</h1>
      {!isSignedIn && (
        <p>
          Please <Link to="/sign-in">Sign In</Link> or{' '}
          <Link to="/sign-up">Sign Up</Link> to continue.
        </p>
      )}
    </div>
  );
};

export default HomePage;