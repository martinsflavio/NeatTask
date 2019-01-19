import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import Header from "./ApplicationBar/ApplicationBar.jsx";
import Drawer from "./Drawer/Drawer.jsx";

// Jss
const styles = theme => ({
  root: {
    display: 'flex',
  },
  mainContentArea: {
    display: 'flex',
    flexGrow: 1,
    minHeight: 'calc(100vh)',
    margin: 0,
    paddingTop: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.mixins.toolbar.minHeight + theme.spacing.unit,
    },
  },
  mainWrapper: {
    flexGrow: 1,
    alignItems: 'stretch',
    margin: theme.spacing.unit * 1,
    padding: 0,
    maxWidth: "800px",
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    // noinspection JSCheckFunctionSignatures
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { mobileOpen } = this.state;
    const { classes, children } = this.props;
    return(
      <div className={classes.root} >
        <Header drawerToogle={this.handleDrawerToggle} />
        <Drawer drawerToogle={this.handleDrawerToggle} mobileOpen={mobileOpen} />
        <Grid container className={classes.mainContentArea} direction="row" justify="center" alignItems="flex-start">
          <main className={classes.mainWrapper} >
            { children }
          </main>
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
