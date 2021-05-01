import React, { Component } from "react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import "./jumbpPage.css";
export class JumboPage extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: true };
  }
  render() {
    return (
      <div>
        <Jumbotron fluid className="bg-color">
          <Container>
            <div className=" freeCourseSecCardAlgn col-lg-12 col-xl-12">
              <div className="mainTitle">
                {" "}
                An Exclusive DevOps & Cloud -Centered Virtual Training Hub
              </div>
              <div className="textColor">Wiculty Learning Replenished</div>
              <div className="m-t-20 font-weight">
                {" "}
                Industry Woven Curriculam | High BandWidth Course Coverage |
                Extensive Deep Dive Training | Lifetime Access to Study
                Materials
              </div>
              <div className="m-t-20 font-weight">
                Course Corporate Conjuntion | Skill Enhancement | Career
                Excellence Sessions | Assistance from an Export pool of
                professional SMEs
              </div>
              <div className="Inst-color">
                <span className="border-color">
                  Instructor-Led Live Training
                </span>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
