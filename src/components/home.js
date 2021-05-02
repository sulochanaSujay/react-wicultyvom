import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CarouselPage } from "./carouselPage";
import { JumboPage } from "./jumboPage";
import { CardPage } from "./cards";
import { TrendingTables } from "./trendingTable";
import { TrainingIndustryCard } from "./trainingIndustryCard.js";
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
          <h4>Free Webinars on Trending Topics</h4>
          <TrendingTables />
        </div>
        <div className="training-industry-container">
          <h4>Our Unique Pitches - Absolutely the best in training industry</h4>
          <TrainingIndustryCard />
        </div>
        <div className="foooter-container">
          <Footer />
        </div>
      </>
    );
  }
}
