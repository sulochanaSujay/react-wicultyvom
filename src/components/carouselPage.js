import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
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
      </div>
    );
  }
}
