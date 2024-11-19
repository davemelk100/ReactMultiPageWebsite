import React from "react";
import { Link } from "react-router-dom";
import dmLogo from "./dm-no-border.svg";

function Navigation() {
  return (
    <header className="navigation sticky-header">
      <div className="row w-100 align-items-center">
        <div className="col-7 h1-wrapper d-flex align-items-center">
          <img src={dmLogo} className="mh-100 h-100" alt="dave m logo" />
          <h1 className="header-title">David Melkonian</h1>
        </div>

        <div className="col-5 d-flex nav-col">
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
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/samples"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Samples
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/rxapp"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Prototype
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/skills"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/resumes"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Contact
                  </Link>
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
