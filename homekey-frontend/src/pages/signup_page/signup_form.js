import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  ShoppingCartIcon,
  StoreIcon,
  BuildingIcon,
} from "lucide-react";

export function SignUpForm() {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const isRoleSelected = (role) => selectedRoles.includes(role);

  return (
    <Form onSubmit={(e) => e.preventDefault()} className="space-y-3">
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          className="py-2 px-3 rounded-lg w-full border border-gray-300"
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          className="py-2 px-3 rounded-lg w-full border border-gray-300"
          required
        />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          className="py-2 px-3 rounded-lg w-full border border-gray-300"
          required
        />
      </Form.Group>

      <p className="text-blue-600 text-center">
        You are signing up as:
      </p>

      <Form.Group>
        <div className="flex justify-center space-x-2">
          <button
            type="button"
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border ${
              isRoleSelected("seller")
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => toggleRole("seller")}
          >
            <StoreIcon className="h-4 w-4 mr-1" />
            <span>Seller</span>
          </button>

          <button
            type="button"
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border ${
              isRoleSelected("buyer")
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => toggleRole("buyer")}
          >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            <span>Buyer</span>
          </button>

          <button
            type="button"
            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border ${
              isRoleSelected("fsh")
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => toggleRole("fsh")}
          >
            <BuildingIcon className="h-4 w-4 mr-1" />
            <span>FSH</span>
          </button>
        </div>
      </Form.Group>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
      >
        Create Account
      </Button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Sign in
        </a>
      </p>
    </Form>
  );
}