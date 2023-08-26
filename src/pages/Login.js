import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="Login-container">
      <h1>Login</h1>
      <form action="/Login" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required></input>
        <button type="submit">Login</button>
      </form>
      <p>
        <p>
          Don't have an Account Sign Up? <Link to="/register">Register</Link>
        </p>
      </p>
    </div>
  );
}

export default Login;
