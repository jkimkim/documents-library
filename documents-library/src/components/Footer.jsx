import React, { Component } from 'react';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.scss';

const Footer = () => { 
    return (
        <React.Fragment>
            <div className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className='fw-semibold fs-5'>DocsLib</h3>
                            <p className='fs-6'>DocsLib is a free library of documents and resources for University Students. We have a collection of free documents and resources for Students from all fields.</p>
                        </div>
                        <div className="col-md-3">
                            <h3 className='fw-semibold fs-5'>Categories</h3>
                            <ul className='list-group list-group-flush fs-6'>
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
                            <h3 className='fw-semibold fs-5'>Useful Links</h3>
                            <ul className='list-group list-group-flush fs-6'>
                                <li className='list-group-item'><a href="#">Home</a></li>
                                <li className='list-group-item'><a href="#">Categories</a></li>
                                <li className='list-group-item'><a href="#">Bootcamp</a></li>
                                <li className='list-group-item'><a href="#">Blog</a></li>
                                <li className='list-group-item'><a href="#">About</a></li>
                                <li className='list-group-item'><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='fw-semibold fs-5'>Follow Us</h3>
                            <ul className='list-group list-group-flush fs-6'>
                                <li className='list-group-item'><a href="#">Facebook</a></li>
                                <li className='list-group-item'><a href="#">Twitter</a></li>
                                <li className='list-group-item'><a href="#">Instagram</a></li>
                                <li className='list-group-item'><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* footer line */}
                    <div className="footer-line"></div>

                    {/* footer bottom */}
                    <div className="footer-bottom flex-row bg-body p-2">
                        <p className="text-center m-0">DocsLib &copy; 2023</p>
                        <p className="text-center m-0">All Rights Reserved</p>
                        <p className="text-center m-0">Designed by <a href="https://main.dun90xnopzyi2.amplifyapp.com/">John Kimiti</a></p>
                        <p className="text-center m-0">Developed by <a href="https://main.dun90xnopzyi2.amplifyapp.com/">John Kimiti</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;