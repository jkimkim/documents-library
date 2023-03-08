import React, { Component } from 'react';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => { 
    return (
        <React.Fragment>
            <div className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className='fw-bold'>DocsLib</h3>
                            <p>DocsLib is a free library of documents and resources for University Students. We have a collection of free documents and resources for Students from all fields.</p>
                        </div>
                        <div className="col-md-3">
                            <h3 className='fw-bold'>Categories</h3>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><a href="#">HTML</a></li>
                                <li className='list-group-item'><a href="#">CSS</a></li>
                                <li className='list-group-item'><a href="#">JavaScript</a></li>
                                <li className='list-group-item'><a href="#">React</a></li>
                                <li className='list-group-item'><a href="#">Node</a></li>
                                <li className='list-group-item'><a href="#">Express</a></li>
                                <li className='list-group-item'><a href="#">MongoDB</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='fw-bold'>Useful Links</h3>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><a href="#">Home</a></li>
                                <li className='list-group-item'><a href="#">Categories</a></li>
                                <li className='list-group-item'><a href="#">Bootcamp</a></li>
                                <li className='list-group-item'><a href="#">Blog</a></li>
                                <li className='list-group-item'><a href="#">About</a></li>
                                <li className='list-group-item'><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='fw-bold'>Follow Us</h3>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><a href="#">Facebook</a></li>
                                <li className='list-group-item'><a href="#">Twitter</a></li>
                                <li className='list-group-item'><a href="#">Instagram</a></li>
                                <li className='list-group-item'><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;