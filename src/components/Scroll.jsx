import React from "react";
import recordtwo from './stripes.png';

function Scroll () {
  return (

    <div className="home">
      <img className="img-art-two" src={recordtwo} alt="vinyl artwork" />
      <div className="container" id="content">
        <div className="row my-5">
          <div className="col-lg-12 mb-3">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <small>person</small><br />
                <h1 className="col-lg-12 p-0 mb-3">David Melkonian</h1>
                <small>page</small><br />
                <h2 className="col-lg-12 p-0 mb-3 page-title">Skills</h2>
                <h3>Front End Development</h3>
                <ul>
                  <li>HTML / CSS / SCSS / Bootstrap / Razor</li>
                  <li>Bootstrap / jQuery</li>
                  <li>Wordpress / Umbraco / Magnolia</li>
                  <li>ReactJs / Angular / Vue / jQuery</li>
                </ul>

                <h3>Front End Design</h3>
                <ul>
                  <li>Photoshop / Illustrator / Sketch </li>
                  <li>Figma / Proto.io / Canva</li>
                </ul>

                <h3>User Experience</h3>
                <ul>
                  <li>UX Architecture / Design Systems / Content Architecture</li>
                  <li>User testing / Designing for accessibility / </li>
                </ul>


                <h3>Package Management</h3>
                <ul>
                    <li>NPM</li>
                    <li>Gulp</li>
                    <li>Yarn</li>
                    <li>NuGet</li>
                    <li>Homebrew</li>
                    <li>Yarn</li>
                </ul>


                <h3>Development Tooling</h3>
                <ul>
                  <li>Github / Bitbucket / Azure</li>
                  <li>Visual Studio / Intellij / Notepad++ / Github Codespaces</li>
                </ul>
              
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll;