import React from "react";
import { HOME_PAGE_TEXT } from "./textConstants";

function Home() {
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
          <div className="col-12 col-lg-7 px-lg-5 main-body">
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card p-0">
                <h2 className="h1 my-2 p-0">David Melkonian</h2>
                <h3 className="h2 my-3 p-0">Professional Summary</h3>
              </div>
              <div className="col-lg-12 p-0">
                <p>
                  With a diverse background in enterprise software delivery, my
                  experience spans projects for high-profile clients such as
                  HealthCare.gov, Blue Cross Blue Shield, United Healthcare,
                  Meridian Health, Delta Dental of Michigan, Ford Motor Company,
                  and General Motors. My roles have included delivery manager,
                  technical lead, accessibility lead, user experience (UX) and
                  user interface (UI) designer/developer, consultant, and
                  technical writer. I've contributed to numerous applications,
                  including Delta Dental's MySmileCoverage site, the Member
                  Portal, and the SaaS product Roosevelt Solutions. I've also
                  been involved with Blue Cross Blue Shield of Michigan's
                  platforms like bcbsm.com and mibcn.com, as well as many other
                  projects of various scales.
                </p>
                <p>
                  With a strong foundation in Agile methodologies such as Scrum
                  and SAFe, I am a Certified Usability Analyst (CUA) through
                  Human Factors International and hold a Scrum Master
                  certification. My work involves close collaboration with
                  product owners, executive leadership, vendors, and management
                  to ensure the delivery of world-class software. As an
                  experienced front-end developer, I am proficient in HTML, CSS,
                  JavaScript, TypeScript, and frameworks like React, Angular,
                  and Bootstrap. I excel at creating pixel-perfect, responsive
                  design frameworks from scratch and converting design files to
                  production-ready code.
                </p>
                <p>
                  I am a UX/UI specialist, skilled in developing and integrating
                  graphic design systems directly with front-end code. I have
                  created wireframes, graphic compositions, design systems,
                  working prototypes, and fully coded proof-of-concept projects.
                  My design toolkit includes Figma, Photoshop, Illustrator, and
                  Sketch, and I have a deep understanding of creating cohesive,
                  visually compelling user experiences.
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
