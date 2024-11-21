import React from "react";
import { HOME_PAGE_TEXT } from "./textConstants";

function Skills() {
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

          <div className="col-12 col-lg-7 px-5 main-body">
            <div className="row my-2 mx-1 sample-row d-flex flex-row">
              <div className="col-lg-12 text-card p-0">
                <h2 className="h1 my-2 p-0">Skills</h2>
                <h3 className="h2 my-3 p-0">There are many, see below.</h3>
              </div>

              <div className="col-lg-6 p-0">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Typescript</li>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>Angular</li>
                  <li>Razor</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>UX/XD/CX/IXD/UI</li>
                  <li>Responsive and adaptive design</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Journey Mapping</li>
                  <li>User Personas</li>
                  <li>Peer Leadership</li>
                  <li>Team Leadership</li>
                  <li>Management</li>
                  <li>SPAs</li>
                  <li>Micro Frontends</li>
                  <li>Microservices</li>
                  <li>REST</li>
                  <li>API</li>
                  <li>AJAX</li>
                  <li>Github</li>
                  <li>VersionOne</li>
                  <li>Subversion</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Contextual Inquiry</li>
                  <li>Task flows</li>
                  <li>User flows</li>
                  <li>Empathy maps</li>
                  <li>User research</li>
                  <li>Usability Testing</li>
                  <li>Heuristic Reviews</li>
                  <li>Technical consulting</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>UI architecture, design and strategy</li>
                  <li>Information Architecture</li>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>UX design and strategy</li>
                  <li>UX design and development</li>
                  <li>Project Management</li>
                  <li>Product Ownership</li>
                  <li>Product Management</li>
                  <li>Strategic leadership</li>
                  <li>Digital accessibility expertise</li>
                  <li>Stakeholder Interviews</li>
                  <li>Team Collaboration</li>
                  <li>A/B Testing</li>
                  <li>Color blindness testing</li>
                  <li>Bootstrap</li>
                  <li>Foundation</li>
                  <li>Accessible coding practices</li>
                  <li>VersionOne</li>
                  <li>MS Word</li>
                  <li>MS Excel</li>
                  <li>MS Powerpoint</li>
                  <li>Lighthouse</li>
                  <li>aXe</li>
                  <li>WAVE</li>
                  <li>Micro frontends</li>
                  <li>Wordpress </li>
                  <li>Umbraco</li>
                  <li>Magnolia</li>
                  <li>JAWS</li>
                  <li>Voiceover</li>
                  <li>InVision</li>
                  <li>Azure</li>
                  <li>Razor</li>
                </ul>
              </div>
              <div class="row my-2 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">Front End Development</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>HTML / CSS / SCSS / Bootstrap / Razor</li>
                    <li>SaSS / Less</li>
                    <li>Wordpress / Umbraco / Magnolia</li>
                    <li>ReactJs / Angular / jQuery</li>
                  </ul>
                </div>
              </div>
              <div class="row my-2 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">Front End Design</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>Photoshop / Illustrator / Sketch </li>
                    <li>Figma / Proto.io / Canva</li>
                  </ul>
                </div>
              </div>
              <div class="row my-4 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">User Experience Design</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>Photoshop / Illustrator / Sketch </li>
                    <li>Figma / Proto.io / Canva</li>
                    <li>Balsamiq / Lucidchart / Adobe XD</li>
                  </ul>
                </div>
              </div>
              <div class="row my-4 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">Package Management</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>NPM</li>
                    <li>Gulp</li>
                    <li>Yarn</li>
                    <li>NuGet</li>
                    <li>Homebrew</li>
                    <li>Yarn</li>
                  </ul>
                </div>
              </div>
              <div class="row my-4 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">Development Tooling</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>Github / Bitbucket / Azure / Jenkins / Docker</li>
                    <li>
                      Visual Studio / Intellij / Notepad++ / Github Codespaces
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row my-4 mx-1 sample-row d-flex flex-row">
                <div class="col-lg-12 text-card mb-3">
                  <h3 class="mb-0">Methodologies and Disciplines</h3>
                </div>
                <div class="col-lg-12">
                  <ul>
                    <li>
                      Content Architecture / UX Architecture / UI Patterns /
                      Workflow Illustration
                    </li>
                    <li>
                      Team Leadership / Management / Consulting / Client
                      Relationships
                    </li>
                    <li>Agile / Scrum / SAFe</li>
                    <li>
                      Human-Centered Design / Accessibility / ADA / Section 508
                    </li>
                    <li>
                      Graphic Design principles / Wireframing / User Experience
                      Certification
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

export default Skills;
