import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'halfmoon/css/halfmoon-variables.min.css';
// import 'halfmoon/css/halfmoon.min.css';


import './css/top-nav.scss';


class TopNav extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <header className="flex flex-row pt-1 pb-1">
                    <div className="logo">
                        <img src="https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png" alt="DocsLib" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#categories">Categories</a></li>
                            <li><a href="#bootcamp">Bootcamp</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                    </nav>
                    {/* login and signup buttons */}
                    <div className="login-signup flx flex-row">
                        <button className="login btn btn-primary" data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Login</button>
                        <a href="#modal-2" className="btn btn-dark logout" role="button">Get started</a>
                    </div>

                    {/* login and signup modal */}
                    {/* <div className="modal" id="modal-2" tabindex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <a href="#" className="btn close" role="button" aria-label="Close">
                                    <span aria-hidden="true">&times;
                                    </span>
                                </a>
                                <h5 className="modal-title">Sign in to your account</h5>
                                <form>
                                    <div className="form-group">
                                        <label for="username" className="required">Email
                                        </label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                                    </div> <div className="form-group">
                                        <label for="password" className="required">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" required="required" />
                                    </div>
                                    <div id="divLoginError" className="group" style={{display: 'none'}}>
                                        <div id="lblLoginErrorMessage" className="errorlabel text-danger">
                                        </div>
                                    </div>
                                    <input className="my-5 btn btn-primary btn-block signin" type="submit" value="Sign in" />
                                    <input className="my-5 btn btn-primary btn-block signup" type="submit" value="Sign up" />
                                </form>
                                <div className="text-right mt-10">
                                    <a href="#modal-2" className="hyperlink">Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </header>
            </React.Fragment>
        );
    }
}


export default TopNav;