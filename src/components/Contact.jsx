import React from "react";
import { HOME_PAGE_TEXT } from "./textConstants";

function Contact() {
  const { skills } = HOME_PAGE_TEXT;

  return (
    <div className="home p-4 p-md-0">
      <div className="container-mine" id="content">
        <div className="row header-clear justify-content-start d-flex flex-md-row flex-column">
          <div className="col-1 squill-column d-none d-sm-none d-md-none d-lg-flex d-xl-flex align-items-center">
            <div className="squill-wrapper">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`squill ${skill.initial.toLowerCase()}`}
                >
                  <p className="squinitial">{skill.initial}</p>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-7 px-5 main-body">
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card p-0">
                <h2 className="h1 my-2 p-0">Contact</h2>
                <h3 className="h2 my-3 p-0">Let's talk.</h3>
              </div>
              <div className="col-lg-12 p-0">
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:davemelk@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/davemelk/">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/davemelk100">Dribble</a>
                  </li>
                  <li>
                    <a href="https://davemelk.com">Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
