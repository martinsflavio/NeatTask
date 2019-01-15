import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { GridItem, GridContainer } from "../../../components";
import objDeepCopy from "../../../../utils/objDeepCopy";

const styles = theme => ({

});

const AdditionalInfo = (props) => {
  return (
    <GridContainer  direction="row" justify="center" alignItems="flex-start">
      element
    </GridContainer>
  );
};

AdditionalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdditionalInfo);
