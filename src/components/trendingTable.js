import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export class TrendingTables extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer"
    };
  }
  render() {
    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>COURSE</th>
              <th>TOPIC</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody className="table-content bg-white">
            <tr>
              <td>AWS</td>
              <td>Advanced Application Monitoring for AWS</td>
              <td>
                <span>
                  <span class="mx-2">8/5/2021</span>5:00 pm&nbsp; &nbsp;(IST)
                </span>
              </td>
              <td>
                {" "}
                <Button variant="outline-warning knowmore-button">
                  know more
                </Button>
              </td>
            </tr>
            <tr>
              <td>DevOps</td>
              <td>Advance your career as a DevOps Engineer!</td>
              <td>
                <span>
                  <span class="mx-2">8/5/2021</span>5:00 pm&nbsp; &nbsp;(IST)
                </span>
              </td>
              <td>
                {" "}
                <Button variant="outline-warning knowmore-button">
                  know more
                </Button>
              </td>
            </tr>
            <tr>
              <td>Microsoft Azure AZ-303</td>
              <td>Microsoft Azure AZ 303: How to Master and What to Expect?</td>
              <td>
                <span>
                  <span class="mx-2">8/5/2021</span>5:00 pm&nbsp; &nbsp;(IST)
                </span>
              </td>
              <td>
                {" "}
                <Button variant="outline-warning knowmore-button">
                  know more
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
