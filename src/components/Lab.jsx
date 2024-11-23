import React from "react";

function Reviews() {
  return (
    <div className="home p-4 p-md-0">
      <div className="container-mine" id="content">
        <div className="row header-clear justify-content-start d-flex flex-md-row flex-column">
          <div className="col-md-8 offset-md-2 px-lg-5 main-body">
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card p-0">
                <h2 className="h1 my-2 p-0">Reviews</h2>
                <h3 className="h2 my-3 p-0">
                  I sincerely appreciate all of these folks.
                </h3>
              </div>

              <div className="col-lg-12 text-card pl-0">
              <a
                    href="https://www.linkedin.com/in/davemelk/details/recommendations/?detailScreenTabIndex=0"
                    className="nav-link text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      document
                        .getElementById("navbarSupportedContent")
                        .classList.remove("show");
                    }}
                  >
                    Check out people saying really nice things about me. They're the best.
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
