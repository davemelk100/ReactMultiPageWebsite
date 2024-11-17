import React from "react";
import profileImage from "./dm-periodic.svg";

function Background() {  
  return (
    <div>
      <img src={profileImage} alt="Profile" className="img-art-two position-fixed d-none d-xs-none d-sm-none d-md-none d-lg-flex d-xl-flex" />
    </div>
  );
}

export default Background;

