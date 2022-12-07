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
                    <nav className="sidebar">
                        <div className="sidebar__header">
                            <h3>Documents Library</h3>
                        </div>
                        <ul className="sidebar__items components">
                            <li className="sidebar__item">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar__item">
                                <a href="#">About</a>
                            </li>
                            <li className="sidebar__item">
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar__item">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="sidebar__item">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
 
export default TopNav;