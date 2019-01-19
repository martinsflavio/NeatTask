import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";

const styles = {
  avatar: {
    margin: 10,
  },
  lg: {
    margin: 10,
    width: 120,
    height: 120,
  },
  sm: {
    margin: 10,
    width: 60,
    height: 60,
  },
  xs: {
    margin: 5,
    width: 30,
    height: 30,
  },
};

function AvatarImg(props) {
  const { classes, size, src, ...rest } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Avatar alt="User Avatar" src={src} className={classes[size]} {...rest} />
    </Grid>
  );
}

AvatarImg.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default withStyles(styles)(AvatarImg);
