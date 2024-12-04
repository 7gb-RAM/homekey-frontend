import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { SignInForm } from "./signin_form";
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

    await fetch("http://localhost:5001/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then(response=>{
      if (!response.ok)
      {
        toast.error("Network error");
      } 
      return response.json()
    }).then(data=>{
      console.log(data);
      toast.success("User login successfully");
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("role", data.role);
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
      }).catch(error=>{
        console.error("Error:", error);
        toast.error("Server error");
        setErrors({ apiError: "Server error. Please try again later." });
      }
    )
    setLoading(false);
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
