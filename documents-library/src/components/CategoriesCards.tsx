import * as React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/introcard.scss';

class CategoriesCard extends Component{
    state = {
        categories: [
            {
                id: 1,
                title: 'Education',
                description: 'Document library for education students',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 2,
                title: 'Business',
                description: 'Document library for business students',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 3,
                title: 'Computer Science',
                description: 'Document library for computer science students',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 4,
                title: 'Engineering',
                description: 'Document library for engineering students',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 5,
                title: 'Mathematics',
                description: 'Document library for mathematics students',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 6,
                title: 'Exams',
                description: 'Document library for past exams',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card color-body">
                                <div className="card-body">
                                    <div className="row">
                                        {this.state.categories.map((category) => (
                                            <div className="col-md-4" key={category.id}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">{category.title}</h5>
                                                        <p className="card-text">{category.description}</p>
                                                        <img src={category.image} className="img-fluid" alt="Responsive image" />
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

export default CategoriesCard;