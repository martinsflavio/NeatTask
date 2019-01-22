import React from "react";

// material-ui core
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

// Jss
const styles = theme => ({
  root: {
    margin: 0,
    padding: 0
  },
  button: {
    padding: theme.spacing.unit * 2,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
});

const ButtonFullWidth = (props) => {
  const { classes, ...rest } = props;

  return (
    <div className={classes.root}>
      <Button fullWidth className={classes.button} component="a" {...rest}>
        {props.children}
      </Button>
    </div>
  );
};

export default withStyles(styles)(ButtonFullWidth);
