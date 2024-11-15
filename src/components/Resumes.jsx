import React from "react";
import recordtwo from "./stripes.png";
import resumepdf from "./david-melkonian.pdf";

function Samples() {
  return (
    <div className="home">
      <img
        className="img-art-two position-fixed"
        src={recordtwo}
        alt="artwork"
      />
      <div className="container" id="content">
        <div className="row my-3">
          <div className="col-lg-12 mx-0 p-4 shadow-lg rounded">
            <div className="row">
              <div className="col-lg-2">
                <h2 className="p-0 m-0 page-title">Resume</h2>
              </div>
              <div className="col-lg-10 d-flex align-items-center">
                <p className="small mb-0">
                  <a className="d-flex hyper" href={resumepdf} download>
                    Download
                  </a>
                </p>
              </div>
            </div>
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card">
                <section className="work-history">
                  <article>
                    <h3>Propio Language Services</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Principal UX/UI Developer
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Overland Park, KS
                    </p>
                    <p>
                      <strong>Duration: </strong> July 2023 - November 2024
                    </p>
                    <ul>
                      <li>Presented new feature concepts to C-Level employees</li>
                      <li>Served as SME for accessibility for ADA / Section 508 / WCAG guidelines</li>
                      <li>Built multiple style guides POCs with Angular and Ionic Framework</li>
                      <li>Built out iconography and typesetting guidelines and assets in a design system</li>
                      <li>Worked in a development role writing HTML / CSS / Typescript</li>
                      <li>Created numerous design systems and clickable prototypes in Figma</li>
                      <li>Created the UX and design for a live transcription feature using OpenAI</li>
                      <li>Designed and coded a solution to prioritize higher performant call quality options</li>
                      <li>Improved accessibility on video call application from 78% to 98%</li>
                      <li>Designed integration look and flow for electronic healthcare record (EHR) transmissions</li>
                      <li>Performed technical and UX writing, in addition to PRDs, Jira tickets, and release notes</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Dewpoint Inc.</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Senior Application Development
                      Professional
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Lansing, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> May 2016 - July 2023
                    </p>
                    <ul>
                      <li>Led Agile development for a SaaS project (DDMI), implementing SDLC and Agile processes.</li>
                      <li>Filled multiple roles—scrum master, developer, product owner—within Agile teams (DDMI).</li>
                      <li>Facilitated stakeholder focus groups to gather requirements (Lansing BWL).</li>
                      <li>Proposed UX strategy for a 3D software product (ONU One).</li>
                      <li>Provided consulting and integration expertise for third-party software (Dewpoint/DDMI).</li>
                      <li>Established enterprise standards for HTML/CSS/Accessibility for UI developers (DDMI).</li>
                      <li>Led UX/UI council, created accessibility practices, and managed UI/UX teams (DDMI).</li>
                      <li>Ensured DDMI applications met WCAG / Section 508 standards.</li>
                      <li>Redesigned Power BI executive dashboards (Lansing BWL).</li>
                      <li>Developed annotated wireframes and visual style guides (ONU One, DDMI).</li>
                      <li>Created custom shopping experiences in Magnolia CMS using Freemarker templates (DDMI).</li>
                      <li>Converted Sketch files to HTML/CSS/Angular comps (DDMI).</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Meridian Health Plan</h3>
                    <p className="mb-0">
                      <strong>Manager of Application Delivery</strong>
                    </p>
                    <p className="mb-0">
                      <strong>Position: </strong>Manager of Application Delivery
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Pontiac, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> June 2015 - May 2016
                    </p>
                    <ul>
                      <li>Managed a web team of 20 across numerous project tracks</li>
                      <li>Built a user experience discipline that previously had not existed within the company</li>
                      <li>Drove UX creative direction for web portals, corporate sites, and mobile applications</li>
                      <li>Wrote job descriptions for all user experience and interface design roles in corporate job postings</li>
                      <li>Implemented the Agile Scrum framework for rapid application development</li>
                      <li>Collaborated with the CIO and IT president on strategic decisions</li>
                      <li>Provided strategic direction for a mobile and web development team</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Optum / United Healthcare Group</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Software Development Manager
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Southfield, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> October 2011 - June 2015
                    </p>
                    <ul>
                      <li>Spent 4 months consulting on the Federal Exchange (HealthCare.gov) identifying UI and UX issues</li>
                      <li>Performed heuristic reviews of HealthCare.gov to identify the top 10 usability issues</li>
                      <li>Taught team about Section 508 / WCAG / ADA compliance and how to code accordingly</li>
                      <li>Managed team of 30 across numerous project tracks</li>
                      <li>Created, staffed, and trained development teams in Manila, New Delhi, Hyderabad, Minnesota, Boston, and Seattle</li>
                      <li>Interviewed over 75 candidates for web developer positions</li>
                      <li>Created responsive design component framework from scratch using HTML, CSS, and AngularJS</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Blue Cross Blue Shield of Michigan</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Senior Application Developer
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Detroit, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> August 2005 - October 2011
                    </p>

                    <ul>
                      <li>Interviewed potential employee candidates</li>
                      <li>Created a new BCBSM Foundation site which won a bronze Wilmer Shields Rich Award</li>
                      <li>Assembled a streaming video platform for CEO Dan Loepp streaming media webcasts</li>
                      <li>Built dynamic websites using ColdFusion</li>
                      <li>Created interactive training guides</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Ford Motor Company (contract from ASG Renaissance)</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Technical Writer
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Dearborn, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> August 1999 - August 2005
                    </p>
                    <ul>
                      <li>Created web-based, interactive training guides used in websites</li>
                      <li>Maintained online screen help for prototype inventory software</li>
                      <li>Maintained training documentation for prototype inventory software training courses</li>
                      <li>Created and designed help and training documentation and training courses for 2 vehicle scheduling apps</li>
                    </ul>
                  </article>

                  <article>
                    <h3>EDS</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Project Manager / Technical
                      Writer
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Troy, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> May 1998 - August 1999
                    </p>
                    <ul>
                      <li>Wrote service manuals using XML and ArborText</li>
                      <li>Planned work for midsize and full-size truck technical writing group with ABT Project Workbench</li>
                      <li>Assisted in creating and maintaining a work breakdown structure for service manual development</li>
                      <li>Complied with ISO-9001 procedures as part of ISO Certification initiative</li>
                      <li>Interviewed potential candidates using behavioral interviewing techniques</li>
                    </ul>
                  </article>

                  <article>
                    <h3>Vultron Inc.</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> Technical Writer
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Rochester Hills, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> February 1996 - September 1996
                    </p>
                    <ul>
                      <li>
                        Wrote software user manuals for electronic destination
                        sign host programs.
                      </li>
                      <li>
                        Wrote service and maintenance manuals for electronic
                        destination signs.
                      </li>
                      <li>
                        Assisted software engineers in the quality assurance
                        process.
                      </li>
                      <li>
                        Created entire layout for various types of manuals with
                        desktop publishing application.
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h3>EDS/GM Medium Duty Truck Engineering Group</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> PC Consultant
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Pontiac, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> May 1995 - February 1996
                    </p>
                    <ul>
                      <li>
                        Worked with the engineering group in improving existing
                        processes.
                      </li>
                      <li>
                        Helped train engineering staff in PC-based applications.
                      </li>
                      <li>
                        Rectified LAN and software problems for the engineering
                        group.
                      </li>
                      <li>
                        Converted hard copy data into PC-based charts, graphs,
                        and diagrams.
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h3>EDS/GM Powertrain</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> PC Support - File Transfer
                      (through the ADIA Employment agency)
                    </p>
                    <p className="mb-0">
                      <strong>Location: </strong> Pontiac, MI
                    </p>
                    <p>
                      <strong>Duration: </strong> March 1995 - May 1995
                    </p>
                    <ul>
                      <li>
                        Performed mass file transfer for the manufacturing
                        division.
                      </li>
                      <li>
                        Converted various Macintosh files into PC-based formats.
                      </li>
                      <li>
                        Helped create new processes for problematic file
                        transfer.
                      </li>
                    </ul>
                  </article>

                  <article>
                    <h3>TranspareX Corp - Cuvërd application</h3>
                    <p className="mb-0">
                      <strong>Position: </strong> UX/UI Designer/Developer
                    </p>
                    <p>
                      <strong>Duration: </strong> August 2020
                    </p>
                    <ul>
                      <li>
                        Created functional prototype using proto.io for mobile
                        application
                      </li>
                      <li>
                        Built demos to be presented to board members and
                        financial backers
                      </li>
                      <li>
                        Converted the proto.io concept application to
                        HTML/CSS/JS for handoff to app developers
                      </li>
                    </ul>
                  </article>
                </section>

                <section id="education" className="mb-5">
                  <h2>Education</h2>
                  <p>
                    <strong>Oakland University</strong> | Rochester, MI
                    <br />
                    Bachelor of Arts - English
                  </p>
                </section>

                <section id="certifications">
                  <h2>Certifications</h2>
                  <ul>
                    <li>Certified ScrumMaster® (Scrum Alliance)</li>
                    <li>
                      HFI Certified Usability Analyst (Human Factors
                      International)
                    </li>
                    <li>
                      ITIL Foundation Certificate in IT Service Management
                      (Peoplecert/Axelos)
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Samples;
