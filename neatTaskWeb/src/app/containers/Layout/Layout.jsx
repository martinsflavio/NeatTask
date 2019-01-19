import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "./ApplicationBar/ApplicationBar.jsx";
import Drawer from "./Drawer/Drawer.jsx";
import { GridContainer } from "../../components";

// Jss
const styles = theme => ({
  root: {
    display: 'flex'
  },
  contentWrapper: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight,
    padding: 0,
    marginRight: 0,
    marginLeft: 0,
  },
  contentArea: {
    maxWidth: theme.spacing.unit * 96,
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    border: '1px solid black',
    padding: 0,
    margin: 0
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
          <GridContainer className={classes.contentWrapper} component="main" direction="row" justify="center" alignItems="center">
            <div className={classes.contentArea}>
              {children}
            </div>
          </GridContainer>

      </div>
    );
  }
}


export default withStyles(styles)(Layout);
