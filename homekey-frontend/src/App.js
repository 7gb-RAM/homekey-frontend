import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import HomePage from './pages/HomePage';
import InternalPage from './pages/InternalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        {/* This is where the seller dashboard comes into play */}
        <Route path="/internal" element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;