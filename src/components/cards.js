import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./card.css";
export class CardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer"
    };
  }
  render() {
    return (
      <>
        <div className="card-row">
          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/6zw23.png"
              alt="card-image"
            />

            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-1">
              <small> With Trending</small>
              <div className="bottom-text">DevSecOps</div>
            </div>
          </Card>

          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/ihzko.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-2">
              <small> With Trending</small>
              <div className="bottom-text">Sage Maker</div>
            </div>
          </Card>

          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/50m3t.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-3">
              <small> With Trending</small>
              <div className="bottom-text">Sphere</div>
            </div>
          </Card>

          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/mfk1ah.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-4">
              <small> With Trending</small>
              <div className="bottom-text">Anthos</div>
            </div>
          </Card>

          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/6n3iq.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-5">
              <small> With Trending</small>
              <div className="bottom-text">Rookout</div>
            </div>
          </Card>
          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/j579h.jpg"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-6">
              <small> With Trending</small>
              <div className="bottom-text">CSI</div>
            </div>
          </Card>

          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/hh9izk.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-4">
              <small> With Trending</small>
              <div className="bottom-text">DevSecOps</div>
            </div>
          </Card>
          <Card className="course-card">
            <img
              className="card-image"
              src="https://d2alvkbeky9xdq.cloudfront.net/course/hh9izk.png"
              alt="card-image"
            />
            <div className="card-text">
              Duration:55+ hrs
              <br />
              Project : 40 hrs
            </div>
            <div className="card-bottom-4">
              <small> With Trending</small>
              <div className="bottom-text">DevSecOps</div>
            </div>
          </Card>
        </div>
      </>
    );
  }
}
