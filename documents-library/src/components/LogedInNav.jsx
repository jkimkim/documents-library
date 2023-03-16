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
        return (
            <React.Fragment>
                {/* Top Nav with side bar */}

            </React.Fragment>
        );
    }
}

export default logedInNav;