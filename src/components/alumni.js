import React, { Component } from "react";
import { Row } from "react-bootstrap";

export class Alumni extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer"
    };
  }
  render() {
    return (
      <>
        <div className="alumni-head">
          <h2>Our Alumni Work Here</h2>
          <p>200+ employers have hired our graduates</p>
        </div>
        <div className="alumni-card">
          <Row>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/tescologo.f5fc072d_01.png"
                alt="alumni-image"
              />
            </div>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/Harmanlogo.dad779a7_01.png"
                alt="alumni-image"
              />
            </div>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/Walmartlogo.c44102ca_01.png"
                alt="alumni-image"
              />
            </div>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/TATAlogo.a8b7d5f7_01.png"
                alt="alumni-image"
              />
            </div>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/Wiprologo.031ab132_01.png"
                alt="alumni-image"
              />
            </div>
            <div className="alumni-icon">
              <img
                className="alumni-images"
                src="https://d2alvkbeky9xdq.cloudfront.net/img/Oracle.df595626_01.png"
                alt="alumni-image"
              />
            </div>
          </Row>
        </div>
      </>
    );
  }
}
