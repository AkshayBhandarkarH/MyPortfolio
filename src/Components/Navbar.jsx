import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <div>
      {" "}
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                {" "}
                <NavLink to="/" className="nav-items">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                {" "}
                <NavLink to="/Skills" className="nav-items">
                  Technical Skills
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/Experience" className="nav-items">
                  Experience
                </NavLink>
              </li>
              <li class="nav-item">
                {" "}
                <NavLink to="/Academics" className="nav-items">
                  Academics
                </NavLink>
              </li>
              <li class="nav-item">
                {" "}
                <NavLink to="/Contact" className="nav-items">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
