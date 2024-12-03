import SignIn from './pages/signin_page/signin';
import SignUp from './pages/signup_page/signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';
import SellerDashboard from './pages/dashboards/SellerDashboard';
import BuyerSidebar from './components/layout/BuyerSidebar';
import BuyerDashboard from './pages/dashboards/BuyerDashboard';
import SellerSidebar from './components/layout/SellerSidebar';
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

{/* We'll have to figure out a way to make these two as one */}
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <BuyerSidebar/>
      <div className="flex-1">
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};
const AuthenticatedLayout2 = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* This is where we decide whether to use the buyer or seller sidebar */}
      <SellerSidebar/>
      <div className="flex-1">
        <main>
          {children}
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
          <Route path="/" element={<Navigate to="/sign-up" />} />
          {/* Authentication Routes */}
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />

          <Route path="/test_buyer/*" 
            element={
              <AuthenticatedLayout>
                <BuyerDashboard routing="path" path="/test_buyer" />
              </AuthenticatedLayout>
            }
          />
          <Route path="/test_seller/*" 
            element={
              <AuthenticatedLayout2>
                <SellerDashboard routing="path" path="/test_buyer" />
              </AuthenticatedLayout2>
            }
          />
          {/* Protected routes */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout>
                  <Settings />
                </AuthenticatedLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
