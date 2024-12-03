import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { SignInForm } from "./signin_form";
import { sleep } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user_id")){
      navigate('/')
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);

    sleep(1000).then(() => {
      axios
        .post("http://localhost:5001/auth/login", { email, password }, {headers: {
          "Content-Type": "application/json",
        },})
        .then((response) => {
          console.log(response);
          localStorage.setItem("user_id", response.data.user_id)
          localStorage.setItem("role", response.data.role)
          navigate('/');
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    });
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
