import React from "react";
import dsone from "./ds1.png";
import dstwo from "./ds2.png";
import dsthree from "./ds3.png";
import dsfour from "./ds4.png";
import dsfive from "./ds5.png";
import dssix from "./ds6.png";
import dsseven from "./ds7.png";
import dseight from "./ds8.png";
import dsnine from "./ds9.png";
import dsten from "./ds10.png";
import dseleven from "./ds11.png";
import dstwelve from "./ds12.png";
import dsthirteen from "./ds13.png";

function Patterns() {
  return (
    <div className="home">
      {/* <Background /> */}
      <div className="container" id="content">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4">
            <div className="row">
              <div className="col-lg-12 mb-0">
                {/* <Person /> */}
                <h2 className="col-lg-12 p-0 mb-0 page-title">Patterns</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card mb-3">
                <p className="text-dark font-weight-normal">
                  I hand-coded the HTML/CSS for this SaaS design system /
                  pattern library as designed by a design agency.
                </p>
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsone}
                  alt="design system part 1"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dstwo}
                  alt="design system part 2"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsthree}
                  alt="design system part 3"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsfour}
                  alt="design system part 4"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsfive}
                  alt="design system part 5"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dssix}
                  alt="design system part 6"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsseven}
                  alt="design system part 7"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dseight}
                  alt="design system part 8"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsnine}
                  alt="design system part 9"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsten}
                  alt="design system part 10"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dseleven}
                  alt="design system part 11"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dstwelve}
                  alt="design system part 12"
                />
              </div>
              <div className="col-lg-12">
                <img
                  className="design-system-img"
                  src={dsthirteen}
                  alt="design system part 13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patterns;
