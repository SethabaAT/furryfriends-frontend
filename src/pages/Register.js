import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../service/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        name,
        email,
        password,
        // confirmPassword,
      };

      const response = await register(userData);

      // Check the response from the server
      if (response.message === "User Registered") {
        // Registration was successful, handle it accordingly (e.g., redirect, show success message)
        console.log("Registration successful!");
        navigate("/login", { replace: true });
      } else {
        // Registration failed, handle it accordingly (e.g., show error message)
        console.error("Registration failed:", response.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /> */}

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
