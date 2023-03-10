import * as React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/top-nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBusinessTime,
  faComputer,
  faMicrochip,
  faCalculator,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";


class CategoriesCard extends Component {
  state = {
    categories: [
      {
        id: 1,
        title: "Education",
        description: "Document library for education students",
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faSchool,
      },
      {
        id: 2,
        title: "Business",
        description: "Document library for business students",
        image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faBusinessTime,
      },
      {
        id: 3,
        title: "Computer Science",
        description: "Document library for computer science students",
          image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faComputer,
      },
      {
        id: 4,
        title: "Engineering",
        description: "Document library for engineering students",
          image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faMicrochip,
      },
      {
        id: 5,
        title: "Mathematics",
        description: "Document library for mathematics students",
          image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faCalculator,
      },
      {
        id: 6,
        title: "Exams",
        description: "Document library for past exams",
          image: "https://jkimtech.web.app/044af99d3d73bd9f8ba8.png",
        icon: faFilePdf,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4" id="categories">
          <h1 className="text-center categories-bg">Categories</h1>
          <div className="row">
            <div className="col-md-12">
              <div className="card color-body">
                <div className="card-body">
                  <div className="row">
                    {this.state.categories.map((category) => (
                      <div className="col-md-4 mb-3" key={category.id}>
                        <div className="card category-card">
                          <div className="card-body">
                            <img
                              src={category.image}
                              className="img-fluid category-img"
                              alt="Responsive image"
                            />
                            <h5 className="card-title fw-bold">
                              {category.title}
                            </h5>
                            <p className="card-text ">{category.description}</p>
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

        <section className="categories bg-light">
          <div className="container categories__container">
            <div className="categories__left">
              <h1>Categories</h1>
              <p>
                This includes categories of some of the most popular documents.
                Feel free to browse through the categories and find the document
                you need.
              </p>
              {/* <!-- <a href="#" className="btn">Visit</a> --> */}
            </div>
            <div className="categories__right">
              {this.state.categories.map((category) => (
                <article className="category card" key={category.id}>
                  <div className="category__icons-div">
                    <span className="category__icon">
                      <FontAwesomeIcon icon={category.icon} />
                    </span>
                  </div>
                  <div className="category__info">
                    <h5>{category.title}</h5>
                    <p>{category.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CategoriesCard;
