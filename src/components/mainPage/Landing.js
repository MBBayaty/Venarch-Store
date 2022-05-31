import React, { Component } from "react";
import Banner from "./Banner";
import Cards from "./Cards";

class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards />
      </div>
    );
  }
}

export default Landing;
