import React from "react";

function Person () {

  const myName = 'David Melkonian'
  
  return (
        <div>
          <small>person</small><br />
          <h1 className="col-lg-12 p-0 mb-3">{myName}</h1>
          <small>page</small><br />
        </div>
  );
}

export default Person;