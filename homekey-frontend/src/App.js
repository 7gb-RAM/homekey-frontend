import SignIn from "./pages/signin_page/signin";
import SignUp from "./pages/signup_page/signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";
import BuyerDashboard from "./pages/dashboards/BuyerDashboard";
import BuyerSidebar from "./components/layout/BuyerSidebar";
import SellerDashboard from "./pages/dashboards/SellerDashboard";
import { Listings } from "./pages/listings";
import SellerSidebar from "./components/layout/SellerSidebar";
import TopBar from "./components/layout/TopBar";
import { CreateListing } from "./pages/listings/create";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import FshDashboard from "./pages/dashboards/FshDashboard";


export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const user_id = localStorage.getItem("user_id");

  if (!user_id) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

// Layout wrapper for authenticated pages
const AuthenticatedLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* This is where we decide whether to use the buyer or seller sidebar */}
      {/* <BuyerSidebar /> */}
      <SellerSidebar />
      <div className="flex-1">
        <TopBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />

          <Route path="/test_buyer/*" element={<BuyerDashboard routing="path" path="/test_buyer" />} />
          <Route path="/test_seller/*" element={<SellerDashboard routing="path" path="/test_seller" />} />
          <Route path="/test_fsh/*" element={<FshDashboard routing="path" path="/test_fsh" />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SellerDashboard />} />
            {/* LISTINGS */}
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/create" element={<CreateListing />} />

            <Route path="/settings" element={<Listings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;