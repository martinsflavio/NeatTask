import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui core
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";

// styles
import styles from "./headerStyle";

class ButtonAppBar extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar  color="secondary" position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              NeatTask
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ButtonAppBar);