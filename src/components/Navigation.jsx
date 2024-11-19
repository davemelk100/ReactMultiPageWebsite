import React from "react";
import { NavLink } from "react-router-dom";
import dmLogo from "./dm-periodic.svg";

function Navigation() {
  return (
    <header className="navigation sticky-header">
      <div className="row w-100">
        <div className="col-4 m-0 h1-wrapper">
          <img src={dmLogo} className="mh-100 h-100 mr-3" alt="dave m logo" />
          <h1 className="header-title p-0 m-0 mr-4">David Melkonian</h1>
        </div>

        <div className="col-8 justify-content-end d-flex">
          <nav className="navbar navbar-expand-md navbar-light bg-transparent">
            <button
              className="navbar-toggler mb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/samples"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Samples
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/rxapp"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Prototype
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/skills"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/resumes"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    onClick={() => {
                      document.getElementById("navbarSupportedContent").classList.remove("show");
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
