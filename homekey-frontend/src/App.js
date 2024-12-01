import HomePage from './pages/home';
import SellerWorkflow from './pages/seller_workflow';
import Layout from './layout';
import BuyerWorkflow from './pages/buyer_workflow';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup_page/signup';
import SignIn from './pages/signin_page/signin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        {/* sign in */}
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />

        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/seller_workflow" element={<SellerWorkflow />} />
          <Route path="/buyer_workflow" element={<BuyerWorkflow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
