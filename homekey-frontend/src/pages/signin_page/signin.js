import React from "react";
import { Card } from "react-bootstrap";
import { SignInForm } from "./signin_form";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-blue-700">
              Sign In
            </h1>
            <p className="text-gray-500">
              Enter your credentials
            </p>
          </div>
          <SignInForm />
        </div>
      </Card>
    </div>
  );
}