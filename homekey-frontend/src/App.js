import HomePage from './pages/home';
import SellerWorkflow from './pages/seller_workflow';
import Layout from './layout';
import BuyerWorkflow from './pages/buyer_workflow';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import InternalPage from './pages/InternalPage';
import UserDashboard from './components/userdashboard/UserDashboard';
import RoleSelector from './pages/roleselector/roleselector';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/seller_workflow" element={<SellerWorkflow />} />
          <Route path="/buyer_workflow" element={<BuyerWorkflow />} />
          <Route path="/internal" element={<InternalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
