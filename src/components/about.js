import React, { Component } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";

export class About extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer"
    };
  }
  render() {
    return (
      <>
        <div className="about-page">
          <Row>
            <Col>
              <a
                href="https://www.wiculty.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wiculty.com
              </a>
              <span> | Learning Replenished</span>
            </Col>
            <Col>
              <div>
                <div>Connect with us:</div>
                <Row>
                  <div>
                    <img
                      className="social-icon"
                      src="https://image.flaticon.com/icons/png/128/2504/2504792.png"
                    />
                    <img
                      className="social-icon"
                      src="https://image.flaticon.com/icons/png/128/2111/2111463.png"
                    />
                    <img
                      className="social-icon"
                      src="https://image.flaticon.com/icons/png/128/1384/1384060.png"
                    />
                    <img
                      className="social-icon"
                      src="https://image.flaticon.com/icons/png/128/2111/2111463.png"
                    />
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="link-div">
                <div className="about-link">
                  <a href="#">Company</a>
                </div>
                <div className="about-link">
                  <a href="#">About Us</a>
                </div>
                <div className="about-link">
                  <a href="#">Terms & Conditions</a>
                </div>
                <div className="about-link">
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </Col>

            <Col>
              <div className="link-div">
                <div className="about-link">
                  <a href="#">Accelerate with us</a>
                </div>
                <div className="about-link">
                  <a href="#">Join as Instructor</a>
                </div>
                <div className="about-link">
                  <a href="#">Affiliate Program</a>
                </div>{" "}
                <div className="about-link">
                  <a href="#">Wiculty Community</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="link-div">
                <div className="about-link">
                  <a href="#">Support & feedback</a>
                </div>
                <div className="about-link">
                  <a href="#">Career - We are hiring!</a>
                </div>
                <div className="about-link">
                  <a href="#">Support Desk</a>
                </div>{" "}
                <div className="about-link">
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </Col>
          </Row>

          <div className="copy-rights">
            <Row>
              <Col>
                <p>
                  ©2021 Wiculty Learning Solutions Pvt. Ltd. All rights Reserved
                </p>
              </Col>
              <Col>
                <Row>
                  <span>Country:</span>

                  <select className="country-dropdown">
                    <option value="volvo">India</option>
                    <option value="saab">America</option>
                    <option value="opel">Singapore</option>
                    <option value="audi">Dubai</option>
                  </select>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
