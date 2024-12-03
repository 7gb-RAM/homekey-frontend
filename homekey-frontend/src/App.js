import SignIn from "./pages/signin_page/signin";
import SignUp from "./pages/signup_page/signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";
import BuyerWorkflow from "./pages/buyer_workflow";
import SellerWorkflow from "./pages/seller_workflow";
import BuyerDashboard from "./pages/dashboards/BuyerDashboard";
import BuyerSidebar from "./components/layout/BuyerSidebar";
import SellerDashboard from "./pages/dashboards/SellerDashboard";
import { Listings } from "./pages/listings";
import SellerSidebar from "./components/layout/SellerSidebar";
import TopBar from "./components/layout/TopBar";
import { EditListing } from "./pages/listings/edit";
import { CreateListing } from "./pages/listings/create";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for styling

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  // const { isLoaded, isSignedIn } = useAuth();

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  // if (!isSignedIn) {
  //   return <Navigate to="/sign-in" replace />;
  // }

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
          {/* Toast */}
          <ToastContainer
            position="top-right" // Set the position where the toast will appear
            autoClose={5000} // Auto-close the toast after 5 seconds
            hideProgressBar={false} // Show or hide the progress bar
            newestOnTop={false} // Stack new toasts on top
            closeOnClick={true} // Close the toast on click
            rtl={false} // Set to true for right-to-left languages
            pauseOnFocusLoss={false} // Pause toast when focus is lost
            draggable={true} // Allow toasts to be draggable
            pauseOnHover={true} // Pause toast on hover
          />
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

          <Route path="/test_buyer/*" element={<BuyerWorkflow routing="path" path="/test_buyer" />} />
          <Route path="/test_seller/*" element={<SellerWorkflow routing="path" path="/test_seller" />} />

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
            <Route path="/listings/:id/edit" element={<EditListing />} />

            <Route path="/settings" element={<Listings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
