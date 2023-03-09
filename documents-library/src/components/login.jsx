import React, { useRef, useState } from "react";
import "./css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { useAuth } from "../Context/AuthContext";

import logo from "../img/logo4.png";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
      e.preventDefault();
      console.log("handleSubmit called");

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError('Passwords do not match');
    }

    try {
        setError('');
        setLoading(true);           
        await signup(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
    } catch (error) {
        console.log(error);
        setError('Failed to create an account');
        setLoading(false);
    }
}
  return (
    <React.Fragment>
      <div
        className="login-modal modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="wrapper modal-content">
            <div className="logo-holder">
              <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">DocsLib</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="p-3 mt-3" onSubmit={handleSubmit}>
              <div className="form-field d-flex align-items-center">
                <span className="fa fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required="required"
                  ref={emailRef}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                  required="required"
                  ref={passwordRef}
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <input
                  type="password"
                  name="confirm password"
                  id="conPwd"
                  placeholder="confirm Password"
                  required="required"
                  ref={confirmPasswordRef}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark mt-3"
                disabled={loading}
              >
                Signup
              </button>
            </form>
            <div className="text-center fs-6">
              <a href="#">Forgot password? </a> OR
              {/* Google and Facebook login */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
