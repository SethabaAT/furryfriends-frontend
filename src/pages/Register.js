import React from "react";
import "./Register.css";

function Register() {
  return (
    <div class="registration-container">
      <h1>Register</h1>
      <form action="/register" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label for="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="login.html">Log in</a>
      </p>
    </div>
  );
}

export default Register;
