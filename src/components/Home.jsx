import React from "react";
import Person from './Person';
import recordtwo from './stripes.png';

function Home() {
  return (
    <div className="home">
      <img className="img-art-two position-fixed" src={recordtwo} alt="artwork" />
      <div className="container">
      <div className="row my-3">
        <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <Person />
                <h2 className="col-lg-12 p-0 mb-0 page-title">Home</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card">
                <h3 className="mb-0 p-0">
                  About Me
                </h3>
                <p className="text-dark font-weight-normal">A summary of my experience</p>
              </div>
              <div className="col-lg-12 p-4">
                <p>
                  My career has included enterprise software delivery with companies/initiatives such as HealthCare.gov,
                  Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor
                  Company, General Motors and more. In addition to my current role, my previous roles include delivery
                  manager, technical lead, accessibility lead, user experience and user interface
                  designer/developer/consultant and technical writer.
                </p>
                <p>I've been fortunate to work on many applications of all sizes. Some include the Delta
                  Dental <a href='https://www.mysmilecoverage.com/delta/'>MySmileCoverage</a> site, Delta's
                  Dental's <a href="https://www.memberportal.com/mp/delta/">Member Portal</a> Delta's SaaS
                  product <a href='https://www.rooseveltsolutions.com/'>Roosevelt Solutions</a>, the <a href='https://www.healthcare.gov/'>HealthCare.gov</a> product,
                  Blue Cross Blue Shield of Michigan's <a href='https://www.bcbsm.com/'>bcbsm.com</a>,
                  and <a href='https://www.mibcn.com/'>mibcn.com</a> along with countless others.
                </p>            
                <p>
                  I am well-versed in Agile software development, including Scrum and SAFe methodologies. I am a
                  Certified Usability Analyst (CUA) by Human Factors International and have obtained Scrum Master
                  certification. I work with product owners, executive leadership, vendors and management
                  to ensure successful development and design to deliver world class software.
                </p>
                <p>I am an experienced front-end developer with experience using HTML/CSS/Javascript/Typescript including
                  React, Angular, Bootstrap, Razor, and more. Creating pixel-perfect HTML and CSS from any design and
                  creating responsive design frameworks by hand are a few of my strengths.</p>
                 <p>
                  I'm a User Experience and User Interface specialist with a CUA 
                  from Human Factors International. I created
                  graphic design systems and integrated them directly with front end code. I've created wireframes, graphic
                  comps, design systems, working prototypes and fully coded POCs. I am fluent in Photoshop, Illustrator, Sketch and Figma.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;