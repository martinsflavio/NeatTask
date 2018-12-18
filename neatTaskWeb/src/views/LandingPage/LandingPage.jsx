import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// styled components
import { Header, GridContainer, GridItem } from "../../components";

// Jss
import styles from "./landingPageStyle";

// banner img
import bannerImg from "../../assets/img/landingBg.jpg"

// sections of this page
import Product from "./Sections/Product";
import CostumersReviews from "./Sections/CostumerReviews";
import HowWeWork from "./Sections/HowWeWork";
import TopCleaners from "./Sections/TopCleaners";

class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Header />
        <GridContainer direction="row" justify="center" alignItems="flex-start">
          <div className={classes.banner}>
            <img alt="banner" src={ bannerImg }/>
          </div>
          <GridItem xs={12} >
            <Product />
          </GridItem>
          <GridItem xs={12} >
            <HowWeWork/>
          </GridItem>
          <GridItem xs={12} >
            <CostumersReviews />
          </GridItem>
          <GridItem xs={12} >
            <TopCleaners />
          </GridItem>
        </GridContainer>
      </Fragment>
    )
  }
}

export default withStyles(styles)(LandingPage);
