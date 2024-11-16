import React from "react";
import profileImage from "./dm-periodic.svg";
import profileImageSmall from "./dm-periodic-small.svg";

function Background() {  
  return (
    <div>
      <img src={profileImage} alt="Profile" className="img-art-two position-fixed d-none d-sm-none d-md-none d-lg-flex d-xl-flex" />
      {/* <img src={profileImageSmall} alt="Profile mobile" className="img-art-two d-none d-xs-flex d-sm-flex d-md-none d-lg-none d-xl-none" /> */}
    </div>

  );
}

export default Background;

