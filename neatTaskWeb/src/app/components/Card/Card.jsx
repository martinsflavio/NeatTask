import React from "react";
import PropTypes from "prop-types";
// @material-ui
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    border: `1px solid ${grey[400]}`,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Card = props => {
  const { classes, children, ...rest } = props;

  return (
    <Paper className={classes.root} elevation={0} {...rest}>
      {children}
    </Paper>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonRef: PropTypes.string,
};

export default withStyles(styles)(Card);
