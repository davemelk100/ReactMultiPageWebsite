import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Samples,
  Rxapp,
  Patterns,
  Skills,
  Contact,
  Posts,
  Post,
  Resumes,
  Reviews,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/samples" element={<Samples />} />
      <Route path="/patterns" element={<Patterns />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rxapp" element={<Rxapp />} />
      <Route path="/resumes" element={<Resumes />} />
      <Route path="/reviews" element={<Reviews />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
