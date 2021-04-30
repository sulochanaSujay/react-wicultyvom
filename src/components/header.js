import React, { Component } from "react";
import "./header.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      Header: "Welcome to Header"
    };
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="https://d2alvkbeky9xdq.cloudfront.net/img/New-wiculty-logo.png"
              alt="navbar"
            />
          </Navbar.Brand>
          <Nav className="mr-auto" />
          <Form inline>
            <FormControl
              bg="dark"
              className="search-text"
              type="text"
              placeholder="Enter course Keyword"
              className=""
            />
          </Form>
          <Nav.Link className="colorWhite" href="#home">
            Refer & Earn
          </Nav.Link>
          <Nav.Link className="colorWhite" href="#features">
            Demos | Webinars
          </Nav.Link>
          <Nav.Link className="colorWhite" href="#pricing">
            Join as Instructor
          </Nav.Link>
          <Nav.Link className="colorWhite" href="#pricing">
            Corporate
          </Nav.Link>
          <Nav.Link className="colorWhite" href="#pricing">
            Blog
          </Nav.Link>
          |<Button className="Danger">Sign up/ Login</Button>{" "}
        </Navbar>
      </div>
    );
  }
}
