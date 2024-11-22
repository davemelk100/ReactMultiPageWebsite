import React from "react";
import { HOME_PAGE_TEXT } from "./textConstants";
import comptwo from "./comptwo.png";
import compthree from "./compthree.png";
import compfour from "./compfour.png";
import compfive from "./compfive.png";
import compsix from "./compsix.png";
import deltaportalsq from "./delta-portal-sq.png";
import renportalsq from "./ren-portal-sq.png";
import wireone from "./wireone.jpg";
import wiretwo from "./wiretwo.jpg";
import wirethree from "./wirethree.jpg";
import wirefour from "./wirefour.jpg";
import wirefive from "./wirefive.png";
import wiresix from "./wiresix.jpg";
import artgear from "./artgear.png";
import artlockup from "./artlockup.png";
import artdots from "./artdots.png";
import artlionsblack from "./artlionsblack.png";
import artstag from "./artstag.png";
import arthands from "./arthands.png";
import artgenuine from "./artgenuine.png";
import recordone from "./recordone.png";
import recordtwo from "./stripes.png";
import onuone from "./onuone.png";
import onutwo from "./onutwo.png";
import onuthree from "./onuthree.png";
import onufour from "./onufour.png";
import onufive from "./onufive.png";
import onusix from "./onusix.png";
import onuog from "./onuog.png";
import onuogtwo from "./onuogtwo.png";
import onuogthree from "./onuogthree.png";
import powerbi from "./powerbi.png";
import powerbione from "./powerbione.png";
import powerbitwo from "./powerbitwo.png";
import lansingtop from "./lansing-1.png";
import lansingbottom from "./lansing-2.png";
import deltasearch from "./delta-search.png";
import rxappone from "./rxapp.png";
import rxapptwo from "./rxapp2.png";
import melkone from "./melk-concept-1.png"

function Samples() {
  const { skills } = HOME_PAGE_TEXT;

  const handleOpenNewWindow = () => {
    window.open(
      "http://localhost:3000/rxapp/",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
                <h2 className="h1 my-2 p-0">Samples</h2>
                <h3 className="h2 my-3 p-0">
                  Please note: There are many more samples I'm not able to share
                  per Non-disclosure and Confidentiality agreements.
                </h3>
              </div>
              <div className="col-lg-12 p-0">
                <div className="row my-2 mx-1 sample-row d-flex flex-row">
                  <div className="col-lg-12 d-flex p-0">
                    <ul className="list-unstyled mt-4">
                      <li title="heading">
                        <small className="mb-0 p-0">sample links</small>
                      </li>
                      <li className="mb-1">
                        <button class="btn btn-link rx-btn" onClick={handleOpenNewWindow}>
                          Rx App Prototype
                        </button>
                      </li>
                      <li className="mb-1">
                        <a href="../remote-int.pdf" download>
                          Video conference concept
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201-315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1">
                          Mobile App Prototype - Help Desk
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf">
                          3D Software UX Plan
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="../onu-one-uxui-plan.pdf" download>
                          3D Software UX Plan pt 2
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf">
                          UX/UI Solution Use Cases
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf">
                          UX/UI Random Sketches
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="https://dribbble.com/davemelk100">
                          Creative work
                        </a>
                      </li>
                    </ul>
                  </div>



                  <div className="col-lg-12 p-0">
                    <small className="mb-2">project</small>
                    <p className="h5">
                      Melkonian Industries Landing Page concept
                    </p>
                    <small className="mb-0">role</small>
                    <p className="mb-2">User Interface Designer</p>
                    <br />
                    <small className="mb-0">contributions</small>
                    <ul className="mb-6">
                      <li className="mb-1">
                        Designed this concept as a potential landing page for a personal project.
                      </li>
                      <li className="mb-1">
                        Photography was done by myself.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 mb-5">
                    <img
                      className="grow sample-img"
                      src={melkone}
                      alt="landing page concept"
                    />
                  </div>







                  <div className="col-lg-12 p-0">
                    <small className="mb-2">project</small>
                    <p className="h5">
                      Delta Dental of Michigan - Individual Shopping platform
                    </p>
                    <small className="mb-0">role</small>
                    <p className="mb-2">Senior Application Developer</p>
                    <br />
                    <small className="mb-0">contributions</small>
                    <ul className="mb-6">
                      <li className="mb-1">
                        Created responsive front end for an Angular application
                        using Bootstrap and significant custom HTML and CSS.
                      </li>
                      <li className="mb-1">
                        Created Freemarker templates for a Magnolia CMS
                      </li>
                      <li className="mb-1">
                        Created alternate theme for Renaissance company
                      </li>
                      <li className="mb-1">
                        Managed UX/UI team at onset of COMPANY Solutions SaaS
                        project
                      </li>
                      <li className="mb-1">
                        Ran the UX/UI council at Delta Dental
                      </li>
                      <li className="mb-1">
                        Performed accessibility reviews and implemented
                        technical solutions for any issues
                      </li>
                      <li className="mb-1">
                        Built a living style guide / design system for reference
                        when project was initiated
                      </li>
                      <li className="mb-1">
                        Collaborated with design agency to ensure design systems
                        are technically feasible
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 mb-5">
                    <img
                      className="grow sample-img"
                      src={deltaportalsq}
                      alt="login page for one customer"
                    />
                    <img
                      className="grow sample-img"
                      src={deltasearch}
                      alt="clever search idea"
                    />
                  </div>

                  <div className="col-lg-12 mt-5 d-flex flex-column">
                    <small className="mb-0">project</small>
                    <p className="h5">
                      Delta Dental of Michigan - Member Portal
                    </p>
                    <small className="mb-0">role</small>
                    <p className="mb-2">Senior Application Developer</p>
                    <br />
                    <small className="mb-0 ">contributions</small>
                    <ul className="mb-2">
                      <li className="mb-1">
                        Extended the individual shopping design system using
                        Angular with custom HTML and CSS
                      </li>
                      <li className="mb-1">
                        Troubleshooting JavaScript/HTML/CSS/etc
                      </li>
                      <li className="mb-1">
                        Conducted code reviews and desk checks
                      </li>
                      <li className="mb-1">
                        Conducted heuristic evaluations of product to identify
                        user experience issues
                      </li>
                      <li className="mb-1">
                        Created the digital accessibility discipline for Delta
                        Dental
                      </li>
                      <li className="mb-1">
                        Performed accessibility reviews and implemented
                        technical solutions for discovered issues
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-12 mt-2">
                    <img
                      className="grow sample-img"
                      src={deltaportalsq}
                      alt="portal login"
                    />
                    <img
                      className="grow sample-img"
                      src={renportalsq}
                      alt="portal login diff"
                    />
                  </div>

                  <div className="col-lg-12 mt-5 py-3 d-flex flex-column">
                    <small className="mb-0">project</small>
                    <p className="h5">Lansing Promise app</p>
                    <br />
                    <small className="mb-0">role</small>
                    <p className="mb-0">UX/UI Consultant</p>
                    <br />
                    <small className="mb-0">contributions</small>
                    <ul className="mb-2 pt-0 pb-1 py-0">
                      <li className="mb-1">
                        Worked with one of our summer interns on enhancing an
                        application created by Dewpoint in support of a special
                        project for the city of Lansing, MI
                      </li>
                      <li className="mb-1">
                        Coded prototype page designs for UI enhancement
                      </li>
                      <li className="mb-1">
                        Created desktop, mobile and tablet views, as this is a
                        mobile-first application
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-12">
                    <img
                      className="grow sample-img"
                      src={lansingtop}
                      alt="lansing comp"
                    />
                    <img
                      className="grow sample-img"
                      src={lansingbottom}
                      alt="lansing comp two"
                    />
                  </div>

                  <div className="col-lg-12 mt-5 py-3 d-flex flex-column">
                    <small className="mb-0">project</small>
                    <p className="h5">
                      Cuverd Prescription Drug mobile application
                    </p>
                    <br />
                    <small className="mb-0">role</small>
                    <p className="mb-0">UX/UI Designer and Developer</p>
                    <br />
                    <small className="mb-0">contributions</small>
                    <ul className="mb-2 pt-0 pb-1 py-0">
                      <li className="mb-1">
                        Created functional prototype using proto.io for mobile
                        application
                      </li>
                      <li className="mb-1">
                        Collaborated with product owner to bring the app vision
                        to life
                      </li>
                      <li className="mb-1">
                        Worked with product owner to build a user experience
                        that will be the product's differentiator
                      </li>
                      <li className="mb-1">
                        Built demos to be presented to board members and
                        financial backers
                      </li>
                      <li className="mb-1">
                        Converted the proto.io concept application to
                        HTML/CSS/JavaScript for handoff to app developers
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-12">
                    <img
                      className="grow sample-img-tall"
                      src={rxappone}
                      alt="rx app 1"
                    />
                    <img
                      className="grow sample-img-tall"
                      src={rxapptwo}
                      alt="rx app 2"
                    />
                  </div>

                  <div className="col-lg-12">
                    <div className="row my-5 mx-1 pb-5 d-flex">
                      <div className="col-lg-12">
                        <h3 className="mb-1">
                          <a
                            href="https://dribbble.com/davemelk100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Mobile App game concept
                          </a>
                        </h3>
                        <p>
                          This group listening app concept began organically as
                          a game played on road trips.
                        </p>
                        <p>
                          Project is fully conceptualized and is in progress.
                        </p>
                      </div>
                      <div className="col-lg-12 comp-cols">
                        <a
                          href="https://dribbble.com/shots/20622909-mobile-game-concept"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="grow sample-img"
                            src={compfour}
                            alt="artwork 4"
                          />
                        </a>
                      </div>
                      <div className="col-lg-12 comp-cols">
                        <a
                          href="https://dribbble.com/shots/20591072-mobile-app-game-concept"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="grow sample-img"
                            src={compthree}
                            alt="artwork 3"
                          />
                        </a>
                      </div>
                      <div className="col-lg-12 comp-cols">
                        <a
                          href="https://dribbble.com/shots/20590741-mobile-game-concept-screens"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="grow sample-img"
                            src={comptwo}
                            alt="artwork 2"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="row my-5 mx-1 pb-5 d-flex">
                      <div className="col-lg-12">
                        <h3 className="mb-1">
                          <a
                            href="https://dribbble.com/davemelk100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Mobile App ticketing system
                          </a>
                        </h3>
                        <p>This was a POC for a potential market offering.</p>
                        <p>
                          Project is complete but only available to internal
                          employees.
                        </p>
                        <p>
                          Check out the{" "}
                          <a
                            href="https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201-315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            protype app.
                          </a>
                        </p>
                      </div>
                      <div className="col-lg-12 comp-cols">
                        <a
                          href="https://dribbble.com/shots/20590937-mobile-app-ticketing-system-concept"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="grow sample-img"
                            src={compfive}
                            alt="artwork"
                          />
                        </a>
                      </div>
                      <div className="col-lg-12 comp-cols">
                        <a
                          href="https://dribbble.com/shots/20590951-mobile-app-ticketing-system-concept"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="grow sample-img"
                            src={compsix}
                            alt="artwork"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row my-5 mx-1 pb-5 d-flex">
                    <div className="col-lg-12">
                      <h3 className="mb-1">
                        <a
                          href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Onu One 3D Software
                        </a>
                      </h3>
                      <p>
                        These are annoted wireframes with color and placeholder
                        text.
                      </p>
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onuone}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onutwo}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onuthree}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onufour}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onufive}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onusix}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onuog}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onuogtwo}
                        alt="artwork"
                      />
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <img
                        className="grow sample-img"
                        src={onuogthree}
                        alt="artwork"
                      />
                    </div>
                  </div>

                  <div className="row my-5 mx-1 pb-5 d-flex">
                    <div className="col-lg-12">
                      <h3 className="mb-1">
                        <a
                          href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Various Wirefames/Sketches
                        </a>
                      </h3>
                      <p>
                        These are random lo-fi wireframes I've made over the
                        years.
                      </p>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wireone}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wiretwo}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wirethree}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wirefour}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-6 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wirefive}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-12 comp-cols">
                      <a
                        href="https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={wiresix}
                          alt="artwork"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="row my-5 mx-1 pb-5 d-flex">
                    <div className="col-lg-12">
                      <h3 className="mb-1">
                        Various Digital Art&nbsp;&nbsp;&nbsp;
                      </h3>
                      <p>
                        These are various cover art concepts and digital assets.
                      </p>
                      <small>
                        <a href="https://dribbble.com/davemelk100">
                          Dribble Portfolio
                        </a>
                      </small>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/20590753-7-inch-record-picture-disc-concept"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={recordtwo}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21583976-Hands-disappear"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={recordone}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21583983-Staggered-and-Spinning-and-Multiplying"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artstag}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/20590849-screen-lock-experiment"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artlockup}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/20602411-all-hands"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artdots}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21583993-Small-Movements-in-a-Giant-Machine"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artgear}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/20590794-band-shirt-design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artlionsblack}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21583998-All-Hands"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={arthands}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21584003-Seems-Authentic-I-mean-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={artgenuine}
                          alt="artwork"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="row my-5 mx-1 pb-5 d-flex">
                    <div className="col-lg-12">
                      <h3 className="mb-1">Power BI Dashboard Design</h3>
                      <p>
                        This a layout template created after multiple iterations
                        and testing with users.
                      </p>
                    </div>
                    <div className="col-lg-12 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21664606-Power-BI-dashboard-design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={powerbi}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-12 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21664606-Power-BI-dashboard-design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={powerbione}
                          alt="artwork"
                        />
                      </a>
                    </div>
                    <div className="col-lg-12 comp-cols">
                      <a
                        href="https://dribbble.com/shots/21664606-Power-BI-dashboard-design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="grow sample-img"
                          src={powerbitwo}
                          alt="artwork"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Samples;
