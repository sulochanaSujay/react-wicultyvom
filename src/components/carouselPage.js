import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
export class CarouselPage extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: true };
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2alvkbeky9xdq.cloudfront.net/banners/h2jduk.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2alvkbeky9xdq.cloudfront.net/banners/8bopc.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2alvkbeky9xdq.cloudfront.net/banners/r4u1i.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="flex">
          <div>Witness Wiculty up here</div>

          <div>
            600+ <span className="subTitle"> Batches Completed</span>
          </div>
          <div>
            12000+ <span className="subTitle">Happy Learners</span>
          </div>
          <div>
            7+ <span className="subTitle"> yrs of Training Legency</span>
          </div>
          <div>
            10+ <span className="subTitle">yrs of Exp.Corporate Tranieer</span>
          </div>
          <div>
            430+ <span className="subTitle">Corporate connections</span>
          </div>
          <div classname="colorBlack">Be a part of this get strated</div>
        </div>
      </div>
    );
  }
}
