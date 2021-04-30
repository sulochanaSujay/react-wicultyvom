import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CarouselPage } from "./carouselPage";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Welcome: " Welcome to JavaTpoint!!"
    };
  }
  render() {
    return (
      <>
        <div clasName="header-container">
          <Header />
        </div>
        <div>
          <div>
            <CarouselPage />
          </div>
          <h1> {this.state.Welcome} </h1>
        </div>
        <div className="foooter-container">
          <Footer />
        </div>
      </>
    );
  }
}
