import React from "react";
import { NavLink } from "react-router-dom";
import dmLogo from "./dm-smaller.svg";

function Navigation() {
  return (
    <header className="navigation sticky-header">
      <div className="row w-100 align-items-center">
        <div className="col-7 h1-wrapper d-flex align-items-center">
          <img src={dmLogo} className="mh-100 h-100 mr-3 mt-2 ml-2" alt="dave m logo" />
          <h1 className="header-title">David Melkonian</h1>
        </div>

        <div className="col-5 d-flex nav-col">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
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
                    activeClassName="active"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/samples"
                    activeClassName="active"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Samples
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/skills"
                    activeClassName="active"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/resumes"
                    activeClassName="active"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    activeClassName="active"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
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
