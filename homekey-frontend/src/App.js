import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SellerWorkflow from './pages/seller_workflow';
import Layout from './layout';
import BuyerWorkflow from './pages/buyer_workflow';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/seller_workflow" element={<SellerWorkflow />} />
        <Route path="/buyer_workflow" element={<BuyerWorkflow />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App