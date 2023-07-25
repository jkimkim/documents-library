import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sidebars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faXmark,
  faSliders,
  faFile,
  faSearch,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../img/docs-logo.png";

function LoggedInNav() {
  const [user] = useState({
    name: "John Kimiti",
    email: "test@gmail.com",
    image: "https://jkimtech.web.app/c13d4e8b3f9cbfbf19fb.svg",
  });

  return (
    <React.Fragment>
      {/*side bar */}
      <div className="side-nav d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            src={logo}
            alt="logo"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <span className="fs-4 fw-semibold">DocsLib</span>
        </a>
        <hr />
        {/* search bar */}
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <h5 className="text-start m-0 p-0">Explore</h5>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active btn-dark" aria-current="page">
              <FontAwesomeIcon icon={faHouse} className="me-2" />
              Home
            </a>
          </li>
          <li>
            <a href="/documents" className="nav-link link-dark">
              <FontAwesomeIcon icon={faFile} className="me-2" />
              Documents
            </a>
          </li>
          <li>
            <a href="/users" className="nav-link link-dark">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Users
            </a>
          </li>
          <li>
            <a href="/settings" className="nav-link link-dark">
              <FontAwesomeIcon icon={faSliders} className="me-2" />
              Settings
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.image}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{user.name}</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoggedInNav;
