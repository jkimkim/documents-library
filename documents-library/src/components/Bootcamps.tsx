import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/introcard.scss';
import './css/top-nav.scss'

class Bootcamps extends Component{
    state = {
        bootcamps: [
            {
                id: 1,
                title: 'Python Bootcamp',
                description: 'Learn Python programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 2,
                title: 'JavaScript Bootcamp',
                description: 'Learn JavaScript programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 3,
                title: 'React Bootcamp',
                description: 'Learn React programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 4,
                title: 'Angular Bootcamp',
                description: 'Learn Angular programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 5,
                title: 'Vue Bootcamp',
                description: 'Learn Vue programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 6,
                title: 'Node Bootcamp',
                description: 'Learn Node programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            },
            {
                id: 7,
                title: 'Express Bootcamp',
                description: 'Learn Express programming language',
                image: 'https://jkimtech.web.app/044af99d3d73bd9f8ba8.png'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                {/* bootcamps section scrolls horizontally */}
                <div className="container mt-4">
                    <h1 className="text-center categories-bg">Explore Bootcamps</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card color-body">
                                <div className="flex-row card-body"style={{ overflowX: 'auto' }} >
                                    <div className="row hide-scroll-bar" style={{ flexWrap: 'nowrap' }}>
                                        {this.state.bootcamps.map((bootcamp) => (
                                            <div className="col-md-4" key={bootcamp.id}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">{bootcamp.title}</h5>
                                                        <p className="card-text">{bootcamp.description}</p>
                                                        <img src={bootcamp.image} className="img-fluid" alt="Responsive image" />
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
        )
    }
}
export default Bootcamps;