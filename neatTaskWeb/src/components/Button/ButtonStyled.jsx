import React, { Fragment } from "react";

// material-ui core
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

// style
import styles from "./style";

const StyledButton = (props) => {
  const { classes, ...rest } = props;

  console.log(rest);

  return (
    <Fragment>
      <Button fullWidth variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </Fragment>
  );
};

export default withStyles(styles)(StyledButton);
