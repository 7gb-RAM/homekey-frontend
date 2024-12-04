import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { SignInForm } from "./signin_form";
import { sleep } from "../../App";
import { toast } from "react-toastify";import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  useEffect(()=>{
    if(localStorage.getItem("user_id")){
      navigate('/')
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const payload = {
      email: email,
      password: password,
    };
    setLoading(true);

    try {
      setLoading(true);
      sleep(1000).then(async () => {
        const response = await fetch("http://localhost:5001/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        setLoading(false);
        const data = await response.json();
        console.log(data);
        
        if (response.ok) {
          toast.success("User login successfully");
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("role", data.role);
          switch (data.role) {
            case "FSH":
              navigate("/fsh_dashboard");
              break;
            case "Seller":
              navigate("/seller_dashboard");
              break;
            case "Buyer":
              navigate("/buyer_dashboard");
              break;
            default:
              navigate("/"); // Fallback route
          }
        } else {
          // Handle errors (e.g., email already exists)
          toast .error(data.error || "An error occurred");
          // setErrors({ apiError: data.error || 'An error occurred' });
        }
      });
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setErrors({ apiError: "Server error. Please try again later." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-700">Sign In</h1>
            <p className="text-gray-500">Enter your credentials</p>
          </div>
          <SignInForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      </Card>
    </div>
  );
}
