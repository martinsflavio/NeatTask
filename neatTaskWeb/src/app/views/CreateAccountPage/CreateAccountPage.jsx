import React, { Component } from "react";
import PropTypes from "prop-types";
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

CreateAccountPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CreateAccountPage;
