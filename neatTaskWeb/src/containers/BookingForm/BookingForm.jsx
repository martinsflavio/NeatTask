import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../utils/objDeepCopy.js";
// form validation
import { iTypes, rTypes, iValidator, fValidator, fReset } from "../../utils/formValidation/index.js";
// styled components
import { ButtonFullWidth } from "../../components/index.js";
import styles from "./style.js";

class BookingForm extends Component {
  state = {
    isFormValid: false,
    formData: {
      zipCode: {
        value:"",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Please valid zip code required.",
        validations: [
          rTypes.required,
          rTypes.isZipCode
        ]
      },
      beds: {
        value:"",
        isValid: false,
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        isError: false,
        errorMessage: "",
        validations: [{[rTypes.isRange]: {max: 10, min: 0}}]
      },
      baths: {
        value:"",
        isValid: false,
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        isError: false,
        errorMessage: "",
        validations: [{[rTypes.isRange]: {max: 10, min: 0}}]
      },
      date: {
        value:"",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Invalid Date",
        validations: [
          rTypes.required,
          rTypes.isDate
        ]
      },
      time: {
        value:"",
        isValid: false,
        isError: false,
        errorMessage: "Invalid Time",
        validations: [rTypes.isTime]
      },
      email: {
        value: "",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Invalid Email",
        validations: [
          rTypes.required,
          rTypes.isEmail
        ]
      }
    },
  };

  handleChange = inputField => e => {
    let newState = objDeepCopy(this.state);

    newState.formData[inputField].value = e.target.value;
    this.setState({...newState});
  };
  handleInputValidation = (inputFieldType) => () => {
    const newState          = objDeepCopy(this.state);
    const validatedInputObj = iValidator(inputFieldType, newState.formData[inputFieldType]);

    newState.formData[inputFieldType] = {...validatedInputObj};
    this.setState({...newState});
  };
  handleFormValidation = e => {
    e.preventDefault();
    let newState = objDeepCopy(this.state);
    const { isFormValid, validatedForm } = fValidator(newState.formData);

    newState.formData = {...validatedForm};
    newState.isFormValid = isFormValid;
    this.setState({...newState});

    newState.formData = {...validatedForm};
    newState.isFormValid = isFormValid;
    this.setState({...newState});
  };

  // submit form is is valid
  componentDidUpdate() {
    let newForm = objDeepCopy(this.state.formData);
    let resetForm;

    if (this.state.isFormValid) {
      console.log('FORM SENT');
      this.props.postBookingForm(newForm);

      resetForm = fReset(newForm);

      console.log("FORM RESET");
      console.dir(resetForm);
    }
  };

  render() {
    const { classes } = this.props;
    const { formData } = this.state;

    return (
      <form className={classes.container} autoComplete="off">
        {/* Zip Code */}
        <TextField
          id="outlined-zipCode"
          label="Zip Code"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={formData[iTypes.zipCode].isRequired}
          value={formData[iTypes.zipCode].value}
          error={formData[iTypes.zipCode].isError}
          helperText={
            formData[iTypes.zipCode].isError ?
              formData[iTypes.zipCode].errorMessage : null
          }
          onChange={this.handleChange(iTypes.zipCode)}
          onBlur={this.handleInputValidation(iTypes.zipCode)}
        />

        {/* Beds */}
        <TextField
          id="outlined-select-beds"
          label="Beds"
          margin="normal"
          variant="outlined"
          select fullWidth
          className={classes.textField}
          required={formData[iTypes.beds].isRequired}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          value={formData[iTypes.beds].value}
          error={formData[iTypes.beds].isError}
          helperText={
            formData[iTypes.beds].isError ?
              formData[iTypes.beds].errorMessage : null
          }
          onChange={this.handleChange(iTypes.beds)}
          onBlur={this.handleInputValidation(iTypes.beds)}
        >
          {formData.beds.nBeds.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Baths */}
        <TextField
          id="outlined-select-baths"
          label="Baths"
          margin="normal"
          variant="outlined"
          select fullWidth
          className={classes.textField}
          required={formData[iTypes.baths].isRequired}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          value={formData[iTypes.baths].value}
          error={formData[iTypes.baths].isError}
          helperText={
            formData[iTypes.baths].isError ?
              formData[iTypes.baths].errorMessage : null
          }
          onChange={this.handleChange(iTypes.baths)}
          onBlur={this.handleInputValidation(iTypes.baths)}
        >
          {formData.baths.nBaths.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Date */}
        <TextField
          id="date"
          label="Date"
          type="date"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={formData[iTypes.date].isRequired}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={formData[iTypes.date].value}
          error={formData[iTypes.date].isError}
          helperText={
            formData[iTypes.date].isError ?
              formData[iTypes.date].errorMessage : null
          }
          onChange={this.handleChange(iTypes.date)}
          onBlur={this.handleInputValidation(iTypes.date)}
        />

        {/* Time */}
        <TextField
          id="time"
          label="Time"
          type="time"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={formData[iTypes.time].isRequired}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={formData[iTypes.time].value}
          error={formData[iTypes.time].isError}
          helperText={
            formData[iTypes.time].isError ?
              formData[iTypes.time].errorMessage : null
          }
          onChange={this.handleChange(iTypes.time)}
          onBlur={this.handleInputValidation(iTypes.time)}
        />

        {/* email */}
        <TextField
          id="outlined-email"
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={formData[iTypes.date].isRequired}
          value={formData[iTypes.email].value}
          error={formData[iTypes.email].isError}
          helperText={
            formData[iTypes.email].isError ?
              formData[iTypes.email].errorMessage : null
          }
          onChange={this.handleChange(iTypes.email)}
          onBlur={this.handleInputValidation(iTypes.email)}
        />

        <ButtonFullWidth
          variant="contained"
          color="primary"
          onClick={e => this.handleFormValidation(e)}>
          Submit
        </ButtonFullWidth>
      </form>
    );
  }
}

/*const mapStateToProps = (booking) => {
  return {
    booking
  }
};*/

const mapDispatchToProps = dispatch => {
  return {
    postBookingForm: (formObj) => dispatch(actions.postBookingForm(formObj))
  }
};

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// injecting Material UI theme
const BookingFormWithStyle = withStyles(styles)(BookingForm);

export default connect(null, mapDispatchToProps)(BookingFormWithStyle);
