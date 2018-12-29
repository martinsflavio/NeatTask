import React, { Component } from "react";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../utils/objDeepCopy.js";
// form validation
import { iTypes, rulesTypes, iValidator, fValidator } from "../../utils/formValidation";
// styled components
import { ButtonFullWidth } from "../../components";
import styles from "./style.js";

class BookingForm extends Component {
  state = {
    isFormValid: false,
    formData: {
      zipCode: {
        value:"",
        isValid: false,
        error: false,
        errorMessage: "Please valid zip code required.",
        validations: [
          rulesTypes.required,
          rulesTypes.isZipCode
        ]
      },
      beds: {
        value:"",
        isValid: false,
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        error: false,
        errorMessage: "",
        validations: [{[rulesTypes.isRange]: {max: 10, min: 0}}]
      },
      baths: {
        value:"",
        isValid: false,
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        error: false,
        errorMessage: "",
        validations: [{[rulesTypes.isRange]: {max: 10, min: 0}}]
      },
      date: {
        value:"",
        isValid: false,
        error: false,
        errorMessage: "Invalid Date",
        validations: [
          rulesTypes.required,
          rulesTypes.isDate
        ]
      },
      time: {
        value:"",
        isValid: false,
        error: false,
        errorMessage: "Invalid Time",
        validations: [
          rulesTypes.required,
          rulesTypes.isTime
        ]
      },
      email: {
        value: "",
        isValid: false,
        error: false,
        errorMessage: "Invalid Email",
        validations: [
          rulesTypes.required,
          rulesTypes.isEmail
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
  handleSubmit = e => {
    e.preventDefault();
    let newState = objDeepCopy(this.state);
    const { isFormValid, validatedForm } = fValidator(newState.formData);

    newState.formData = {...validatedForm};
    newState.isFormValid = isFormValid;
    this.setState({...newState});
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
          required fullWidth
          className={classes.textField}
          value={formData[iTypes.zipCode].value}
          error={formData[iTypes.zipCode].error}
          helperText={
            formData[iTypes.zipCode].error ?
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
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          value={formData[iTypes.beds].value}
          error={formData[iTypes.beds].error}
          helperText={
            formData[iTypes.beds].error ?
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
          value={formData[iTypes.baths].value}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          error={formData[iTypes.baths].error}
          helperText={
            formData[iTypes.baths].error ?
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
          required fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={formData[iTypes.date].value}
          error={formData[iTypes.date].error}
          helperText={
            formData[iTypes.date].error ?
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
          required fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={formData[iTypes.time].value}
          error={formData[iTypes.time].error}
          helperText={
            formData[iTypes.time].error ?
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
          required fullWidth
          className={classes.textField}
          value={formData[iTypes.email].value}
          error={formData[iTypes.email].error}
          helperText={
            formData[iTypes.email].error ?
              formData[iTypes.email].errorMessage : null
          }
          onChange={this.handleChange(iTypes.email)}
          onBlur={this.handleInputValidation(iTypes.email)}
        />

        <ButtonFullWidth
          variant="contained"
          color="primary"
          onClick={e => this.handleSubmit(e)}>
          Submit
        </ButtonFullWidth>
      </form>
    );
  }
}

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingForm);
