import React from "react";
import Background from "./Background";

function Home() {
  return (
    <div className="home">
      <Background />
      <div className="container" id="content">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4">
            <div className="row">
              <div className="col-lg-12 mb-0">
                <h2 className="col-lg-12 p-0 mb-0 page-title">Home</h2>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card">
                <h3 className="my-3 p-0">Professional Summary</h3>
              </div>
              <div className="col-lg-12">
                <section className="professional-summary">
                  <p>
                    With a diverse background in enterprise software delivery,
                    my experience spans projects for high-profile clients such
                    as HealthCare.gov, Blue Cross Blue Shield, United
                    Healthcare, Meridian Health, Delta Dental of Michigan, Ford
                    Motor Company, and General Motors. My roles have included
                    delivery manager, technical lead, accessibility lead, user
                    experience (UX) and user interface (UI) designer/developer,
                    consultant, and technical writer.
                  </p>
                  <p>
                    I've contributed to numerous applications, including Delta
                    Dental's MySmileCoverage site, the Member Portal, and the
                    SaaS product Roosevelt Solutions. I've also been involved
                    with Blue Cross Blue Shield of Michigan's platforms like
                    bcbsm.com and mibcn.com, as well as many other projects of
                    various scales.
                  </p>
                </section>

                <section className="skills-expertise">
                  <h4>Skills and Expertise</h4>
                  <p>
                    With a strong foundation in Agile methodologies such as
                    Scrum and SAFe, I am a Certified Usability Analyst (CUA)
                    through Human Factors International and hold a Scrum Master
                    certification. My work involves close collaboration with
                    product owners, executive leadership, vendors, and
                    management to ensure the delivery of world-class software.
                  </p>

                  <p>
                    As an experienced front-end developer, I am proficient in
                    HTML, CSS, JavaScript, TypeScript, and frameworks like
                    React, Angular, and Bootstrap. I excel at creating
                    pixel-perfect, responsive design frameworks from scratch and
                    converting design files to production-ready code.
                  </p>
                </section>

                <section className="ux-ui-design">
                  <h4>User Experience & Interface Design</h4>
                  <p>
                    I am a UX/UI specialist with a CUA credential, skilled in
                    developing and integrating graphic design systems directly
                    with front-end code. I have created wireframes, graphic
                    compositions, design systems, working prototypes, and fully
                    coded proof-of-concept projects. My design toolkit includes
                    Figma, Photoshop, Illustrator, and Sketch, and I have a deep
                    understanding of creating cohesive, visually compelling user
                    experiences.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
