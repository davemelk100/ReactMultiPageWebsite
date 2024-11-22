import React from "react";
import { NavLink } from "react-router-dom";
// import dmLogo from "./dm-smaller.svg";

function Navigation() {
  return (
    <header className="navigation sticky-header">
      <div className="row w-100 align-items-center">
        <div className="col-7 h1-wrapper d-flex align-items-center">
          {/* <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/"
            onClick={() => {
              document.getElementById("navbarSupportedContent").classList.remove("show");
            }}
          >
            <img
              src={dmLogo}
              className="mh-100 h-100 mr-3 mt-0 ml-3"
              alt="dave m logo"
            />
          </NavLink> */}
          <div className="periodic-card col-auto mx-3">
            <div className="top-row">
              <span className="label">UX</span>
              <span className="label">UI</span>
            </div>
            <div className="center-content">
              <span className="symbol">Dm</span>
            </div>
            <div className="bottom-row">
              <span className="footer-text">100% DIGITAL</span>
            </div>
          </div>

          <h1 className="header-title">David Melkonian</h1>
        </div>

        <div className="col-5 d-flex nav-col">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent align-items-center justify-content-center">
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
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/"
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
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/samples"
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
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/skills"
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
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/contact"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/in/davemelk/details/recommendations/?detailScreenTabIndex=0"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Reviews
                  </a>
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
