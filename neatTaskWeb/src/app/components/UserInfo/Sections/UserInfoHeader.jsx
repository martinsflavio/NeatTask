import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {

};

const UserInfoHeader = (props) => {
  const { align } = props;
  const {
    name,
    phone,
    since,
    rate,
    businessHours
  } = props.data;

  return (
    <Fragment>
      <Typography align="center" color="inherit" variant="h6" gutterBottom>
        {rate}</Typography>
      <Typography align={align} color="inherit" variant="h5" gutterBottom>
        {name}</Typography>
      <Typography align={align} color="inherit" variant="subtitle1">
        {phone}</Typography>
      <Typography align={align} color="inherit" variant="subtitle1">
        Since {since}</Typography>
      <Typography align={align} color="inherit" variant="subtitle1">
        Hours {businessHours[0]} - {businessHours[1]}</Typography>
    </Fragment>
  );
};

UserInfoHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfoHeader);
