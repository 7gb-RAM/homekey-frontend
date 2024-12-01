import HomePage from './pages/home';
import SellerWorkflow from './pages/seller_workflow';
import Layout from './layout';
import BuyerWorkflow from './pages/buyer_workflow';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import InternalPage from './pages/InternalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/seller_workflow" element={<SellerWorkflow />} />
        <Route path="/buyer_workflow" element={<BuyerWorkflow />} />
        <Route path="/internal" element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;