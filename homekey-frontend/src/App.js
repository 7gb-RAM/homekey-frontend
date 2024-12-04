import SignIn from "./pages/signin_page/signin";
import SignUp from "./pages/signup_page/signup";
import React, { useContext } from "react";
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
import "react-toastify/dist/ReactToastify.css";
import FshDashboard from "./pages/dashboards/FshDashboard";
import FshSidebar from "./components/layout/FshSidebar";


export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const ProtectedRoute = ({ children }) => {
  const user_id = localStorage.getItem("user_id");

  if (!user_id) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

const AuthenticatedLayout = () => {
  // 根据用户的身份决定生成那种侧边栏
  // 其他见pages/signup_page/signup_form第90-110行以及pages/signin_page/signin第30-50行
  
  const renderSidebar = () => {
    switch (localStorage.getItem("role")) {
      case "Seller":
        return <SellerSidebar />;
      case "Buyer":
        return <BuyerSidebar />;
      case "FSH":
        return <FshSidebar />;
      default:
        return null;
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {renderSidebar()}
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
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }>
            <Route path="/buyer_dashboard" element={<BuyerDashboard />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }>
            <Route path="/seller_dashboard" element={<SellerDashboard />} />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }>
            <Route path="/fsh_dashboard" element={<FshDashboard />} />
          </Route>

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SellerDashboard />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/create" element={<CreateListing />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;