import React, { Component } from "react";

import { UserInfo, GridItem, GridContainer } from "../../components";
import { Layout } from "../../containers";

class ProfilePage extends Component {
  render() {
    return (
      <Layout>
        <GridContainer direction="row" justify="center" alignItems="flex-start">
          <GridItem xs={12}>
            <UserInfo />
          </GridItem>
        </GridContainer>
      </Layout>
    );
  }
}

export default ProfilePage;
