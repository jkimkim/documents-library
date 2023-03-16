import React, { Component } from 'react';
import 'halfmoon/css/halfmoon-variables.min.css';
import 'halfmoon/css/halfmoon.min.css';
import 'halfmoon/js/halfmoon.min.js'
import './css/top-nav.scss';

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
        const halfmoon = window.halfmoon;
        return (
            <React.Fragment>
                {/* Top Nav */}

                <div className="page-wrapper with-navbar with-sidebar">
                    <nav className="navbar">
                        <div className='navbar-content'>
                            <button id='toggle-sidebar-btn' className='btn btn-action btn-link' type='button' onClick={
                                () => {
                                    halfmoon.toggleSidebar();
                                }
                            }>
                                <i className='fa fa-bars' aria-hidden='true'></i>
                            </button>
                        </div>
                        <a href='#' className='navbar-brand ml-10 ml-sm-20'>
                            <img src='https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png' alt='DocsLib' />
                            <span className='d-none d-sm-flex'>
                                DocsLib
                            </span>
                        </a>

                        {/* profile */}
                        <div className='navbar-content ml-auto'>
                            <div className='dropdown with-arrow'>
                                <button className='btn btn-action btn-link' id='profileDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    <i className='fa fa-user' aria-hidden='true'></i>
                                </button>
                                <div className='dropdown-menu dropdown-menu-right' aria-labelledby='profileDropdownMenuLink'>
                                    <a className='dropdown-item' href='#'>My Profile</a>
                                    <a className='dropdown-item' href='#'>My Docs</a>
                                    <a className='dropdown-item' href='#'>Upload</a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' href='#'>Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                

                {/* Side Nav */}

                <div className="side-nav">
                    <div className="side-nav-header">
                        <div className="side-nav-header-image">
                            <div
                                className="side-nav-header-image rounded"
                                style={{
                                    backgroundImage: `url(${this.state.user.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '40px',
                                    height: '40px',
                                }}
                            ></div>
                        </div>
                        <div className="side-nav-header-name">
                            <p>{this.state.user.name}</p>
                        </div>
                    </div>
                    <div className="side-nav-body">
                        <ul>
                            <li>
                                <a href="#features">Upload</a>
                            </li>
                            <li>
                                <a href="#categories">My Docs</a>
                            </li>
                            <li>
                                <a href='#'>My Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default logedInNav;