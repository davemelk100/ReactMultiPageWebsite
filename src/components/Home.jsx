import React from "react";
import recordtwo from './stripes.png';

function Home() {
  return (
    <div className="home">
      <img class="img-art-two" src={recordtwo} alt="vinyl artwork" />
      <div class="container">
        <div class="row my-5">

          <div class="col-lg-5">
            <div class="row">
              <div class="col-lg-12 mb-3">
              <small>person</small><br />
                <h1 class="col-lg-12 p-0 mb-3">David Melkonian</h1>
                <small>page</small><br />
                <h1 class="col-lg-12 p-0 mb-3 page-title">Home</h1>
                <div class="row">
                  <div class="col-lg-3">
                  <small>contact</small><br />
                    <ul class="list-unstyled">
                      <li><a href="https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing">Resume</a></li>
                      <li><a href="https://www.linkedin.com/in/davemelk/">LinkedIn</a></li>
                      <li><a href="https://dribbble.com/davemelk100">Dribble</a></li>
                      <li><a href="https://davemelk.com">Portfolio</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-9">
                    <small>skills</small><br />
                    <ul class="list-unstyled">
                      <li>Application Development</li>
                      <li>Application Solutioning</li>
                      <li>User Interface Development</li>
                      <li>User Interface Design</li>
                      <li>Technical and Creative Leadership</li>
                      <li>Accessibility Specialist</li>
                      <li>Technology Consultation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 pt-5 bio">
          <small>title</small><br />
            <h2 class="h5 mb-4"><a href="https://www.mysmilecoverage.com/">Senior Developer - User Interface Specialist</a></h2>
            <p>
              I am an experienced front-end developer with experience using HTML/CSS/Javascript/Typescript including
              React, Angular, Bootstrap, .NET/Razor, and more.  I've created responsive design frameworks by hand, created
              graphic design systems and integrated them directly with front end code. I've created prototypes for mobile applications
              and am fluent in Photoshop, Illustrator, Sketch, Figma and more. I've been fortunate to work on many applications of all sizes.
              Some include the Delta Dental <a href='https://www.mysmilecoverage.com/delta/'>MySmileCoverage</a> site, Delta's
              Dental's <a href="https://www.memberportal.com/mp/delta/">Member Portal</a> Delta's SaaS
              product <a href='https://www.rooseveltsolutions.com/'>Roosevelt Solutions</a>, the <a href='https://www.healthcare.gov/'>HealthCare.gov</a> product, Blue Cross Blue Shield of Michigan's <a href='https://www.bcbsm.com/'>bcbsm.com</a>,
              and <a href='https://www.mibcn.com/'>mibcn.com</a> along with countless others.
            </p>
            <p>
              My career has included enterprise software delivery with companies/initiatives such as HealthCare.gov,
              Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor
              Company, General Motors and more. In addition to my current role, my previous roles include delivery
              manager, technical lead, accessibility lead, user experience and user interface
              designer/developer/consultant and technical writer.
            </p>
            <p>
              I am well-versed in Agile software development, including Scrum and SAFe methodologies. I am a
              Certified Usability Analyst (CUA) by Human Factors International and have obtained Scrum Master
              certification. I work closely with product owners, executive leadership, vendors and management
              to ensure successful development and design to deliver world class software.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;