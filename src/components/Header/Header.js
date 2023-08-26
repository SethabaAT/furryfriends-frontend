import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/display/Logo.png";
import { Cart2 } from "react-bootstrap-icons";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <Link to="/">
            <span className="navbar-name">FurryFriends Essential</span>
          </Link>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        {/* Direct to the cart page */}
        <Link to="/cart" className="cart">
          <Cart2 size={24} />
          <div className="cartAmount" id="cartAmount">
            0
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
