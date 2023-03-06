import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/top-nav.scss';

class TopNav extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <header className="flex flex-row pt-1">
                    <div className="logo">
                        <img src="https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png" alt="DocsLib" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Featurs</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Bootcamp</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                    </nav>
                    {/* login and signup buttons */}
                    <div className="login-signup flx flex-row">
                        <button className="login btn btn-primary">Login</button>
                        <button className="signup btn btn-primary">Signup</button>
                    </div>

                </header>
            </React.Fragment>
        );
    }
}
 
export default TopNav;