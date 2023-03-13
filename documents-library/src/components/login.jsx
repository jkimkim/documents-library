import React, { useRef, useState } from "react";
import "./css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../Context/AuthContext";
import logo from "../img/docs-logo.png";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
      e.preventDefault();

    try {
        setError('');
        setLoading(true);           
        await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      {/* remove the modal after login */ }
      
      const modal = document.getElementById('loginModal');
      const backdrop = document.querySelector('.modal-backdrop');
      modal.classList.remove('show');
      backdrop.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.parentNode.removeChild(backdrop);

      {/* restore scroll bar */ }

      navigate('/Home');
    } catch {
        setError('Failed to log in');
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
              <button
                type="submit"
                className="btn btn-dark mt-3"
                disabled={loading}
              >
                Log In
              </button>
            </form>
            <div className="text-center fs-6">
              <a href="#">Forgot password? </a> OR
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal"> Sign Up</a>
              {/* Google and Facebook login */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
