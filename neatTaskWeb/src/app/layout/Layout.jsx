import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "./Header/Header.jsx";
import Drawer from "./Drawer/Drawer.jsx";

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
