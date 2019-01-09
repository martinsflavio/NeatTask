import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { GridItem, GridContainer } from "../../../components";

const styles = {};

const AdditionalInfo = (props) => {
  return (
    <GridContainer  direction="row" justify="center" alignItems="center">
      <GridItem xs={12} sm={4}>
        <Typography align="center" color="inherit" variant="h6" gutterBottom>
          Services Offered</Typography>
      </GridItem>

      <GridItem xs={12} sm={4}>
        <Typography align="center" color="inherit" variant="h6" gutterBottom>
          Cleaning products</Typography>
      </GridItem>

      <GridItem xs={12} sm={4}>
        <Typography align="center" color="inherit" variant="h6" gutterBottom>
          Covered areas</Typography>
      </GridItem>
    </GridContainer>
  );
};

AdditionalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdditionalInfo);
