import React from "react";
import profileImage from "./dm-periodic-reverse.png";

function Background() {  
  return (
    <div className="h-100">
      <img src={profileImage} alt="Profile" className="img-art-two position-fixed d-none d-xs-none d-sm-none d-md-none d-lg-flex d-xl-flex" />
    </div>
  );
}

export default Background;

