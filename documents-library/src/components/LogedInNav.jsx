import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
        return (
            <React.Fragment>
                {/* Top Nav */}

                <header className="flex flex-row pt-1 pb-1">
                    <div
                        className="logo fw-bold rounded"
                        onClick={() => {
                            window.location = '/';
                        }}
                    >
                        <div
                            className="logo mx-1 rounded"
                            style={{
                                backgroundImage: `url(${this.state.user.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '40px',
                                height: '40px',
                            }}
                        ></div>
                        DocsLib
                    </div>
                    {/* search bar */}
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* User profile */}
                    <div className="user-profile flx">
                        <div className="user-profile-image">
                            <div
                                className="user-profile-image rounded"
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
                        <div className="user-profile-name">
                            <p>{this.state.user.name}</p>
                        </div>
                    </div>
                </header>

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