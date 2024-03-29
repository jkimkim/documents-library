import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './css/introcard.scss'

class IntroSection extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="container mt-6" id="intro">
              <div className="row">
                <div className="col-md-12">
                  {/* // This is the intro section card with text, an image and a signup button */}
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="card-title fw-bold">
                            Welcome to the Documents Library
                          </h1>
                          <p className="card-text">
                            This is a simple document library that allows you to
                            upload, view and delete documents.
                          </p>
                          <p className="card-text">
                            DocsLib is a free library of documents and resources
                            for University Students. We have a collection of
                            free documents and resources for Students from all
                            fields.
                          </p>
                          <p className="card-text">
                            To get started, click the button below to sign up
                            for free.
                          </p>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#signupModal"
                            className="btn btn-dark signup"
                            role="button"
                          >
                            Get started
                          </a>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="https://jkimtech.web.app/044af99d3d73bd9f8ba8.png"
                            className="img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default IntroSection;