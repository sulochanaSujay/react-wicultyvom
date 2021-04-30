import React, { Component } from "react";
export class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      Footer: "Welcome to Footer"
    };
  }
  render() {
    return (
      <>
        <div className="text-white career-ass-footer flex-vertical-center">
          <span> For Career Assistance</span>
          <span class="in_num ml-4">
            <strong>IND :</strong>
            <a class="text-white mx-2" href="tel:+91-6366648666">
              +91-6366648666
            </a>
          </span>
          <span class="us_num mx-2">
            <strong>US :</strong>
            <a class="mx-2 text-white" href="tel:+1-408-809-3690 ">
              +1-408-809-3690{" "}
            </a>
            (Toll Free)
          </span>
          <span class="us_num mx-2">support@wiculty.com</span>
        </div>
      </>
    );
  }
}
