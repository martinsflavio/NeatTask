import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../../../utils/objDeepCopy.js";
// styled components
import {Input} from "../../../components";

// bookingForm validation
import { rNames, iValidator, fValidator } from "../../../../utils/formValidation";

// Jss
const styles = theme => ({
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class CreateAccountForm extends Component {
  state = {
    okToSubmit: false,
    bookingForm: {
      zipCode: {
        label: "Zip Code",
        value:"",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Please valid zip code required.",
        validations: [
          rNames.required,
          rNames.isZipCode
        ]
      },
      beds: {
        value:"",
        isValid: false,
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        isError: false,
        errorMessage: "",
        validations: [{[rNames.isRange]: {max: 10, min: 0}}]
      },
      baths: {
        value:"",
        isValid: false,
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        isError: false,
        errorMessage: "",
        validations: [{[rNames.isRange]: {max: 10, min: 0}}]
      },
      date: {
        value:"",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Invalid Date",
        validations: [
          rNames.required,
          rNames.isDate
        ]
      },
      time: {
        value:"",
        isValid: false,
        isError: false,
        errorMessage: "Invalid Time",
        validations: [rNames.isTime]
      },
      email: {
        label: "Email",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Invalid Email",
        validations: [
          rNames.isEmail
        ]
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
      <form className={classes.gridContainer} autoComplete="off">
        <Input
          id="zipCode"
          inputObj={bookingForm.zipCode}
          handleChange={this.handleChange}
          handleValidation={this.handleInputValidation}/>
        <Input
          id="email"
          inputObj={bookingForm.email}
          handleChange={this.handleChange}
          handleValidation={this.handleInputValidation}/>
      </form>
    );
  }
}

CreateAccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(CreateAccountForm);
