import React from "react";
import { NavLink } from "react-router-dom";
//import Person from './Person'

function Navigation() {
  return (
    <header className="navigation">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="header-title">David Melkonian</h1>
          {/* <small>title</small>
          <br /> */}
          <span> - </span>
          <h2 className="header-second-title">User Experience Development and Design Professional</h2>
        </div>

        <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <button
              className="navbar-toggler mb-2"
              type="button"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
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
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/samples">
                    Samples
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rxapp">
                    Prototype
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/patterns">
                    Patterns
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/skills">
                    Skills
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resumes">
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>

                {/* <li className="nav-item">
                <NavLink className="nav-link" to="/scroll">
                  Scroll
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
