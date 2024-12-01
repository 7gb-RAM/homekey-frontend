import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SellerWorkflow from './pages/seller_workflow';
import Layout from './layout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/seller_workflow" element={<SellerWorkflow />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App