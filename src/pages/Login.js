import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../service/api.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login service function and pass email and password
      const response = await login(email, password);

      // Check if the login was successful based on the response
      if (response.message === "Login successful") {
        // Successful login, redirect to home
        console.log("Login Succesful");
        navigate("/", { replace: true });
      } else {
        console.error("Login was not successful:", response.statusText);
        // Handle the case of unsuccessful login, e.g., show an error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="Login-container" onSubmit={handleLogin}>
      <h1>Login</h1>
      <form>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an Account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
