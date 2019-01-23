import React, { Component } from "react";
// styled components
import { Layout, CreateAccountForm } from "../../containers/index";

class CreateAccountPage extends Component {

  render() {

    return (
      <Layout>
        <CreateAccountForm />
      </Layout>
    );
  }
}

export default CreateAccountPage;
