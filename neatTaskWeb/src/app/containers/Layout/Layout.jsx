import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Header from "./ApplicationBar/ApplicationBar.jsx";
import Drawer from "./Drawer/Drawer.jsx";
import { GridContainer } from "../../components";

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 9,
  },
  contentMaxWidth: {
    maxWidth: theme.spacing.unit * 96,
    border: "1px solid black"
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

          <GridContainer className={classes.content} component="main" direction="row" justify="center" alignItems="center">

            <div className={classes.contentMaxWidth}>
              {children}
            </div>
          </GridContainer>

      </div>
    );
  }
}


export default withStyles(styles)(Layout);
