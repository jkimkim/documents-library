import * as React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/introcard.scss';

class FeaturesCard extends Component {
state = {
    features: [
        {
            id: 1,
            title: 'Upload Documents',
            description: 'Upload documents to the library',
            image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
        },
        {
            id: 2,
            title: 'View Documents',
            description: 'View documents in the library',
            image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
        },
        {
            id: 3,
            title: 'Delete Documents',
            description: 'Delete documents from the library',
            image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
        }
    ]
 }
    render() {
    return (
        <React.Fragment>
            <div className="container mt-4" id='features'>
                <h1 className="text-center categories-bg">Features</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card color-body">
                            <div className="card-body">
                                <div className="row">
                                    {this.state.features.map((feature) => (
                                        <div className="col-md-4" key={feature.id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">{feature.title}</h5>
                                                    <p className="card-text">{feature.description}</p>
                                                    <img src={feature.image} className="img-fluid" alt="Responsive image" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default FeaturesCard;