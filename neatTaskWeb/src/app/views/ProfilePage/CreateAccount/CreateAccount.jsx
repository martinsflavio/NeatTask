import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../../../utils/objDeepCopy.js";
// @material-ui core
import { Divider, Typography } from "@material-ui/core";
// styled components
import { Input, Card, Avatar, GridContainer, GridItem, ButtonFullWidth } from "../../../components";

// bookingForm validation
import { rNames, iValidator, fValidator } from "../../../../utils/formValidation";
// img
import userImg from "../../../../assets/img/avatarPh.png";

// Jss
const styles = theme => ({
  root:{
    padding: 0,
    margin: 0
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
  },
  gridItem: {
    margin: 0,
    padding: 0,
  },
  ButtonFullWidth: {
    padding: theme.spacing.unit,
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
            <Typography align="center" variant="h6">
              Fulano das Neves
            </Typography>
            <Divider variant="middle" />

            <form className={classes.gridContainer} autoComplete="off">
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
              <Input
                id="email"
                inputObj={bookingForm.email}
                handleChange={this.handleChange}
                handleValidation={this.handleInputValidation}/>
              <Input
                id="password"
                inputObj={bookingForm.password}
                handleChange={this.handleChange}
                handleValidation={this.handleInputValidation}/>
            </form>
            <Divider/>
            <ButtonFullWidth color="primary">
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
