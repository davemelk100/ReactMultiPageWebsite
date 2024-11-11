import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div className="container" id="content">
        <h1 className="text-center mt-5">Blog page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;