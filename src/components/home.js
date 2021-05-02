import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CarouselPage } from "./carouselPage";
import { JumboPage } from "./jumboPage";
import { CardPage } from "./cards";
import { TrendingTables } from "./trendingTable";
export class Home extends React.Component {
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
          <CarouselPage />
        </div>
        <div className="jumbo-container">
          <JumboPage />
        </div>
        <div className="card-container">
          <CardPage />
        </div>
        <div className="trendingTable-container">
          <TrendingTables />
        </div>
        <div className="foooter-container">
          <Footer />
        </div>
      </>
    );
  }
}
