import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sidebars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import {logo} from '../img/docs-logo.png';

class logedInNav extends Component {
    state = {
        user: {
            name: 'John Kimiti',
            email: 'test@gmail.com',
            image: 'https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png'
        },
        isLogedIn: true,
        isLogedOut: false,

    }
    render() {
        return (
            <React.Fragment>
                {/* Top Nav with side bar */}
                <div className='side-nav d-flex flex-column flex-shrink-0 p-3 bg-light'>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span className="fs-4">DocsLib</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link active" aria-current="page">
                                <i className="fas fa-home"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/documents" className="nav-link link-dark">
                                <i className="fas fa-file"></i>
                                Documents
                            </a>
                        </li>
                        <li>
                            <a href="/users" className="nav-link link-dark">
                                <i className="fas fa-users"></i>
                                Users
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="nav-link link-dark">
                                <i className="fas fa-cog"></i>
                                Settings
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={this.state.user.image} alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{this.state.user.name}</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>             
                </div>
            </React.Fragment>
        );
    }
}

export default logedInNav;