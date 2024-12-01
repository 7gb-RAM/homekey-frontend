import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import HomePage from './pages/homepage/HomePage';
import InternalPage from './pages/InternalPage';
import UserDashboard from './components/userdashboard/UserDashboard';
import RoleSelector from './pages/roleselector/roleselector';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/select-role" element={<SignedIn><RoleSelector /></SignedIn>} />
        {/* This is where the seller dashboard comes into play */}
        <Route path="/internal" element={<InternalPage />} />
        <Route path="/dashboard/*" element={<SignedIn> <UserDashboard /> </SignedIn>} />
        {/* Redirect unauthenticated users */}
        <Route path="*" element={ <SignedOut> <RedirectToSignIn /> </SignedOut> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;