import React, { Component } from "react";
// @material-ui core
import { withStyles } from "@material-ui/core";
// styled components
import { GridItem, GridContainer } from "../../components";
import { Layout } from "../../containers";
import CreateAccount from "./CreateAccount/CreateAccount.jsx";

const styles = theme => ({
  grid: {
    margin: 0,
    padding: 0
  },
});
class ProfilePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <GridContainer className={classes.grid} direction="row" justify="center" alignItems="flex-start">
          <GridItem className={classes.grid} xs={12} >
            <CreateAccount />
          </GridItem>
        </GridContainer>
      </Layout>
    );
  }
}

export default withStyles(styles)(ProfilePage);
