import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui core
import { CardMedia } from "@material-ui/core";

// styled components
import { GridContainer, GridItem } from "../../components";
import Layout from "../../layout/Layout.jsx";

// Jss
import styles from "./landingPageStyle.js";

// banner img
import bannerImg from "../../../assets/img/landingBg.jpg"

// sections of this page
import Booking from "./Sections/Booking.jsx";
import CostumersReviews from "./Sections/CostumerReviews.jsx";
import HowWeWork from "./Sections/HowWeWork.jsx";
import TopCleaners from "./Sections/TopCleaners.jsx";

class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <CardMedia className={classes.media} image={bannerImg} />
        <GridContainer direction="row" justify="center" alignItems="flex-start">
          <GridItem xs={12} >
            <Booking />
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
      </Layout>
    )
  }
}

export default withStyles(styles)(LandingPage);
