import React from "react";

function Rxapp() {
  return (
    <div className="home">
      {/* <Background /> */}
      <div className="container" id="content">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <h2 className="col-lg-12 p-0 mb-0 page-title">
                  Cuverd Rx Mobile Application
                </h2>
              </div>
            </div>
            <div className="row my-2 mt-1 mb-4 sample-row d-flex flex-row">
              <div className="col-lg-12 iframe-div">
                <iframe
                  width="420"
                  height="1000"
                  target="_self"
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={(e) => {
                    const iframeDoc =
                      e.target.contentDocument ||
                      e.target.contentWindow.document;
                    iframeDoc.addEventListener("click", (event) => {
                      event.preventDefault(); // Stops links inside the iframe from affecting the parent.
                    });
                  }}
                  title="mobile prescription drug prototype"
                  src="../rxapp/index.html"
                ></iframe>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-12 mb-0">
                <h2 className="col-lg-12 p-0 mb-0 page-title">
                  Help Desk Mobile Application Concept
                </h2>
              </div>
            </div> */}
            {/* <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 iframe-div">
                <iframe
                  width="420"
                  height="1000"
                  target="_self"
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={(e) => {
                    const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
                    iframeDoc.addEventListener("click", (event) => {
                      event.preventDefault(); // Stops links inside the iframe from affecting the parent.
                    });
                  }}
                  title="mobile help desk prototype embed"
                  src="https://embed.figma.com/proto/IaGShRQDs0RRld07kLP9G5"
                ></iframe>

                <iframe
                src="https://embed.figma.com/design/nrPSsILSYjesyc5UHjYYa4?embed-host=figma-embed-docs"
                allowfullscreen>
                </iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rxapp;
