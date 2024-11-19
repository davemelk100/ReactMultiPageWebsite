import React from "react";

function Contact() {
  return (
    <div className="home">
      {/* <Background /> */}
      <div className="container" id="content">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4">
            <div className="row">
              <div className="col-lg-12 mb-0">
                {/* <Person /> */}
                <h2 className="col-lg-12 p-0 mb-0 page-title">Contact</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 p-0">
                <div className="col-lg-3 p-0">
                  <ul className="list-unstyled">
                    <li>
                      <a href="mailto:davemelk@gmail.com">Email</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/davemelk/">
                        LinkedIn
                      </a>
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
    </div>
  );
}

export default Contact;
