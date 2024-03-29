import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../../utils/objDeepCopy.js";
// @material-ui core
import { Divider, Typography } from "@material-ui/core";
// styled components
import {
  Input, Card, Avatar, GridContainer,
  GridItem, ButtonFullWidth } from "../../components/index";

// bookingForm validation
import { rNames, iValidator, fValidator } from "../../../utils/formValidation/index";
// img
import userImg from "../../../assets/img/avatarPh.png";

// Jss
const styles = theme => ({
  root:{
    padding: 0,
    margin: 0
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    marginBottom: theme.spacing.unit * 3,
  },
  gridItem: {
    margin: 0,
    padding: 0,
  },
});

class CreateAccountForm extends Component {
  state = {
    okToSubmit: false,
    bookingForm: {
      firstName: {
        label: "First Name",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "First name required",
        validations: [rNames.required]
      },
      lastName: {
        label: "LastName",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Last name required",
        validations: [rNames.required]
      },
      phoneNumber: {
        label: "Phone Number",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Please enter a valid phone number",
        validations: [rNames.required]
      },
      email: {
        label: "Email",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Invalid Email",
        validations: [rNames.required]
      },
      password: {
        label: "Password",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Must contain at least 6 characters",
        validations: [rNames.required]
      }
    },
  };

  handleChange = inputName => e => {
    let newState = objDeepCopy(this.state);

    newState.bookingForm[inputName].value = e.target.value;
    this.setState({...newState});
  };
  handleInputValidation = inputName => () => {
    const newState          = objDeepCopy(this.state);
    const validatedInputObj = iValidator(inputName, newState.bookingForm[inputName]);

    newState.bookingForm[inputName] = {...validatedInputObj};
    this.setState({...newState});
  };
  handleFormValidationAndSubmit = e => {
    e.preventDefault();
    let newState = objDeepCopy(this.state);
    const { okToSubmit, bookingForm } = fValidator(newState.bookingForm);

    if (okToSubmit) {
      this.props.postBookingForm(bookingForm);
    } else {
      newState.bookingForm = bookingForm;
      newState.okToSubmit = okToSubmit;
      this.setState({...newState});
    }
  };

  render() {
    const { classes } = this.props;
    const { bookingForm } = this.state;

    return (
      <GridContainer className={classes.root} direction="column" justify="center" alignItems="stretch">
        <GridItem className={classes.gridItem} xs={12}>
          <Card style={{paddingBottom: 0}}>
            <Avatar size="lg" src={userImg} />
            <Divider variant="middle" />

            <form className={classes.formContainer} autoComplete="off">
              <GridContainer direction="row" justify="space-evenly" alignItems="stretch">
                <GridItem xs={12}>
                  <Typography variant="h6">Personal Information</Typography>
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    id="firstName"
                    inputObj={bookingForm.firstName}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                  <Input
                    id="lastName"
                    inputObj={bookingForm.lastName}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                  <Input
                    id="phoneNumber"
                    inputObj={bookingForm.phoneNumber}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                </GridItem>
                <GridItem xs={12}>
                  <Typography variant="h6">Credentials</Typography>
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    id="email"
                    inputObj={bookingForm.email}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                  <Input
                    id="passWord"
                    inputObj={bookingForm.password}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                </GridItem>
              </GridContainer>
            </form>

            <Divider />

            <ButtonFullWidth color="primary" >
              Save
            </ButtonFullWidth>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

CreateAccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(CreateAccountForm);
