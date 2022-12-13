import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div>
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <h1>Bikin</h1>
        </div>
        <div className="Navbar-lists">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Drop Down</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
