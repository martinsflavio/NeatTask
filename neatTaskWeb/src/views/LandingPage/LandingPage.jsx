import React, { Component } from "react";

// material-ui core

// styled components
import Header from "../../components/Header/Header";
import { GridItem, GridContainer } from "../../components/Grid";

// sections of this page
import Product from "./Sections/Product";
import CostumersReviews from "./Sections/CostumerReviews";
import HowWeWork from "./Sections/HowWeWork";
import TopCleaners from "./Sections/TopCleaners";

import landingBg from "../../assets/img/landingBg.jpg";

class LandingPage extends Component {
  render() {

    return (
      <div>
        <Header />
        <div>
          <img src={landingBg}/>
        </div>
        <GridContainer direction="row" justify="center" alignItems="flex-start">

            <Product />

        </GridContainer>



        <HowWeWork/>

        <CostumersReviews />

        <TopCleaners />
      </div>
    )
  }
}

export default LandingPage;
