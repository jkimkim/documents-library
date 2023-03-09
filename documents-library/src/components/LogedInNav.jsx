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
                <header className="flex flex-row pt-1 pb-1">
                    <div className="logo">
                        <img src="https://www.techno.com/wp-content/uploads/2019/03/techno-logo.png" alt="DocsLib" />
                    </div>
                    <nav>
                        {/* menu items avilable to loged in users eg upload, search, explore docs, book marks */}
                        <ul>
                            <li><a href='#'>Upload</a></li>
                            <li><a href='#'>Search</a></li>
                            <li><a href='#'>Explore Docs</a></li>
                            <li><a href='#'>Bookmarks</a></li>
                        </ul>
                    </nav>
                    {/* search bar */}
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* user profile */}
                    <div className="user-profile">
                        <img src={this.state.user.image} alt="user" />
                        <div className="user-name">
                            <p>{this.state.user.name}</p>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default logedInNav;