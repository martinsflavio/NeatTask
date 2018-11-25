import React, { Component } from "react";

// styled components
import Header from "../../components/Header/Header";

// sections of this page
import Product from "./Sections/Product";
import CostumersReviews from "./Sections/CostumerReviews";
import HowWeWork from "./Sections/HowWeWork";
import TopCleaners from "./Sections/TopCleaners";


class LandingPage extends Component {
  render() {

    return (
      <div>
        <Header />
        <Product />
        <HowWeWork />
        <CostumersReviews />
        <TopCleaners />
      </div>
    )
  }
}

export default LandingPage;
