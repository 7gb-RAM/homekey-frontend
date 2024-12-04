import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { SignUpForm } from "./signup_form";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(localStorage.getItem("user_id")){
      switch (localStorage.getItem("role")) {
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
          navigate("/");
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-700">
              Create Account
            </h1>
            <p className="text-gray-500">
              Enter your details to get started
            </p>
          </div>
          <SignUpForm />
        </div>
      </Card>
    </div>
  );
}