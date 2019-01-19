import React, { Component } from "react";
// @material-ui core
import { withStyles } from "@material-ui/core";
// styled components
import { UserInfo, GridItem, GridContainer } from "../../components";
import { Layout } from "../../containers";

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
            <UserInfo />
          </GridItem>
        </GridContainer>
      </Layout>
    );
  }
}

export default withStyles(styles)(ProfilePage);
