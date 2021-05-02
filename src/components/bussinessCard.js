import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./business.css";
export class Business extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="row business-color">
        <div className="col-lg-6">
          <div className="business-img">
            <div>
              <img src="https://d2alvkbeky9xdq.cloudfront.net/img/wic-bussiness.jpg" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="business-card">
            <div className="Business-subTitle">Still in Perplexion?</div>
            <div className="Business-subTitle">
              How to optimise the tech skills of your Employees?
            </div>
            <div className="Business-subTitle">
              Leave it to us! We know the pulse of corporate training
            </div>
            <Button className="explore-button">Explore Now</Button>
          </div>
        </div>
      </div>
    );
  }
}
