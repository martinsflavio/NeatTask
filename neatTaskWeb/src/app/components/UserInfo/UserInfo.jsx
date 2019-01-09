import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// styled components
import {
  Avatar,
  AdditionalInfo,
  GridContainer,
  GridItem,
  UserInfoHeader } from "../../components";
// Jss
import styles from "./UserInfoStyle.js";
// img
import avatarPh from "../../../assets/img/avatarPh.png";

function PaperSheet(props) {
  const { classes } = props;
  const userData = {
    name: "John Das Couves",
    phone: "(650) XXX-XXXX",
    photo: avatarPh,
    since: "2015",
    averagePrice: "U$ 80.00",
    rate: 4.8,
    hired: 50,
    businessHours: ["9:00", "20:00"],
    services: ["Standard Cleaning", "Deep Cleaning", "Move In", "Move Out"],
    cleaningProducts: ["Standard", "Eco-friendly"],
    coveredAreas: ["San Francisco", "Oakland"]
  };

  return (
    <div>
      <div className={classes.root} >
        <GridContainer  direction="row" justify="center" alignItems="center">

          {/* User main info block */}
          <GridItem xs={12} sm={3} >
            <Avatar avatarSize="lg" img={userData.photo}/>
            <UserInfoHeader align="center" data={userData}/>
          </GridItem>

          {/* User additional info block */}
          <GridItem xs={12} sm={9}>
            <AdditionalInfo />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
