import React, { useRef } from 'react';
import './css/login.css'

import { useAuth } from '../Context/AuthContext';

import logo from '../img/logo4.png';

function Login() {
    const email = useRef();
    const password = useRef();
    const { signup } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();

        signup(email.current.value, password.current.value);
    }
    return (
        <React.Fragment>
            <div className="login-modal modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="wrapper modal-content">
                        <div className="logo-holder">
                            <img src={logo} alt="" />
                        </div>
                        <div className="text-center mt-4 name">
                            DocsLib
                        </div>
                        <form className="p-3 mt-3">
                            <div className="form-field d-flex align-items-center">
                                <span className="far fa-user"></span>
                                <input type="email" name="email" id="email" placeholder="Email" required="required" ref={email} />
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="password" name="password" id="pwd" placeholder="Password"
                                    required="required" ref={password} />
                            </div>
                            <div id="divLoginError" className="group" style={
                                { display: 'none' }
                            }>
                                <div id="lblLoginErrorMessage" className="errorlabel text-danger">
                                </div>
                            </div>
                            <button className="btn btn-dark mt-3">Login</button>
                            <button className="btn btn-dark mt-3">Signup</button>
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

export default Login