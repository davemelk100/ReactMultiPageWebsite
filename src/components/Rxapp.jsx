import React from "react";
import recordthree from './vinyldots.png';
import Person from './Person'

function Rxapp() {
  return (
    <div className="home">
      <img className="img-art-two position-fixed" src={recordthree} alt="artwork" />
      <div className="container" id="content">
      <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <Person />
                <h2 className="col-lg-12 p-0 mb-0 page-title">Cuverd Rx Mobile Application</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card">
                <h3 className="mb-1">Clickable Prototype</h3>
              </div>
              <div className="col-lg-12 iframe-div">
                
              <iframe width="600" height="1000" title="mobile prototype embed">
              </iframe>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default Rxapp;