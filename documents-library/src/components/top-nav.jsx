import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/top-nav.css';

class TopNav extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <header>
                    <div className="logo">
                        <img src="https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png" alt="Techno Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <button>Search</button>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
 
export default TopNav;