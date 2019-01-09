import React, { Component, Fragment } from "react";

import { HeaderCustom } from "../../containers";
import { UserInfo, GridItem, GridContainer } from "../../components";

class ProfilePage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderCustom />
        <GridContainer direction="row" justify="center" alignItems="flex-start">
          <GridItem xs={12}>
            <UserInfo />
          </GridItem>
        </GridContainer>
      </Fragment>
    );
  }
}

export default ProfilePage;
