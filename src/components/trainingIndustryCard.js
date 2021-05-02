import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";

export class TrainingIndustryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer",
      industry: {
        icon:
          "https://cdn1.iconfinder.com/data/icons/phone-call-3/400/Calls-18-512.png",
        title: "Case study based learning approach",
        description:
          "Our modules are tailored with top domain based case studies discussion to inculcate real time understanding on ways logics can be used efficiently, a strong trait for learners."
      }
    };
  }
  render() {
    return (
      <>
        <Row>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
          <Card className="training-industry-card">
            <div>
              <img
                className="icon-image"
                src={this.state.industry.icon}
                alt=""
              />
            </div>
            <div className="industry-title">{this.state.industry.title}</div>
            <div className="industry-description">
              {this.state.industry.description}
            </div>
          </Card>
        </Row>
      </>
    );
  }
}
