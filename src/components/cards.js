import React, { Component } from "react";
import { Card } from "react-bootstrap";
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
        <Card className="course-card">
          <img
            className="card-image"
            src="https://d2alvkbeky9xdq.cloudfront.net/course/6zw23.png"
            alt="card-image"
          />
        </Card>
      </>
    );
  }
}
