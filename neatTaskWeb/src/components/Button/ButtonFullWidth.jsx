import React from "react";

// material-ui core
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

// Jss
import styles from "./style.js";

const ButtonFullWidth = (props) => {
  const { classes, ...rest } = props;

  return (
    <Button fullWidth className={classes.button} {...rest}>
      {props.children}
    </Button>
  );
};

export default withStyles(styles)(ButtonFullWidth);
