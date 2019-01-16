import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// styled components
import { Card, GridContainer, GridItem, Avatar} from "../../components";
// img
import avatarPh from "../../../assets/img/avatarPh.png";

const styles = theme => ({
  root: {
    marginTop: `${theme.spacing.unit * 3}px`,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const PaperSheet = (props) => {
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
    additionalInfo: {
      "Services Offered": ["Standard Cleaning", "Deep Cleaning", "Move In", "Move Out"],
      "Cleaning Products": ["Standard", "Eco-friendly"],
      "Covered Areas": ["San Francisco", "Oakland"]
    }
  };

  return (
    <div className={classes.root} >
      <GridContainer  direction="row" justify="center" alignItems="center">
        <GridItem xs={12}>
          <Avatar avatarSize="lg" img={userData.photo}/>
          <Typography align="center" color="inherit" variant="h4" gutterBottom>
            {userData.name}</Typography>
        </GridItem>
        <GridItem xs={12}>
          <Card/>
        </GridItem>
      </GridContainer>
    </div>

  );
};

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);


{/*  <GridItem sm={4} className={classes.border}>
          <Avatar avatarSize="lg" img={userData.photo}/>
          <Typography align="center" color="inherit" variant="h4" gutterBottom>
            {userData.name}</Typography>
        </GridItem>
        <GridItem sm={8} className={classes.border}>

        </GridItem>

         User additional info block
        <GridItem xs={12} sm={9}>
          <AdditionalInfo data={userData.additionalInfo}/>
        </GridItem>*/}