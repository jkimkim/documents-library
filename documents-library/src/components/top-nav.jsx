import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'halfmoon/css/halfmoon-variables.min.css';
// import 'halfmoon/css/halfmoon.min.css';
import Login from "./login";
import SignUp from "./SignUp";

import "./css/top-nav.scss";
import logo from "../img/docs-logo.png";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="flex flex-row pt-1 pb-1">
          <div
            className="logo fw-bold rounded"
            onClick={() => {
              window.location = "/";
            }}
          >
            <img className="logo mx-1 rounded" src={logo} alt="DocsLib" />
            DocsLib
          </div>
          <nav>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#bootcamp">Bootcamp</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          {/* login and signup buttons */}
          <div className="login-signup flx">
            <a
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              className="btn btn-dark login mx-1"
              role="button"
            >
              log in
            </a>
            <a
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
              className="btn btn-dark signup"
              role="button"
            >
              Get started
            </a>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default TopNav;
