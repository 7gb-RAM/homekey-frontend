import SignIn from './pages/signin_page/signin';
import SignUp from './pages/signup_page/signup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';
import BuyerWorkflow from './pages/buyer_workflow';
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
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <div className="flex-1">
        {/* <TopBar /> */}
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
        {/* Authentication Routes */}
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />

        <Route path="/test_buyer/*" element={<BuyerWorkflow routing="path" path="/test_buyer" />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout>
                  <Dashboard />
                </AuthenticatedLayout>
              </ProtectedRoute>
            }
          />
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
