import React, { Component } from "react";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../utils/objDeepCopy.js";
// form validation
import { inputTypes, rulesTypes, inputValidator, formValidator } from "../../utils/formValidation";
// styled components
import { ButtonFullWidth } from "../../components";
import styles from "./style.js";

class BookingForm extends Component {
  state = {
    isFormValid: false,
    formData: {
      zipCode: {
        value:"",
        isValid: true,
        validations: [
          rulesTypes.required,
          rulesTypes.isZipCode
        ]
      },
      beds: {
        value:"",
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        isValid: true,
        validations: [
          rulesTypes.required,
          {[rulesTypes.isRange]: {max: 10, min: 0}}]
      },
      baths: {
        value:"",
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        isValid: true,
        validations: [rulesTypes.required,
          {[rulesTypes.isRange]: {max: 10, min: 0}}]
      },
      date: {
        value:"",
        isValid: true,
        validations: [
          rulesTypes.required,
          rulesTypes.isDate
        ]
      },
      time: {
        value:"",
        isValid: true,
        validations: [
          rulesTypes.required,
          rulesTypes.isTime
        ]
      },
      email: {
        value: "",
        isValid: true,
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

    this.setState({
      ...newState
    });
  };
  handleInputValidation = (inputFieldType) => () => {
    const newState = objDeepCopy(this.state);
    const inputObj = newState.formData[inputFieldType];

    newState.formData[inputFieldType].isValid = inputValidator(inputFieldType, inputObj);

    this.setState({...newState});

  };
  handleSubmit = e => {
    e.preventDefault();
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
          value={formData[inputTypes.zipCode].value}
          error={!formData[inputTypes.zipCode].isValid}
          onChange={this.handleChange(inputTypes.zipCode)}
          onBlur={this.handleInputValidation(inputTypes.zipCode)}
        />

        {/* Beds */}
        <TextField
          id="outlined-select-beds"
          label="Beds"
          margin="normal"
          variant="outlined"
          required select fullWidth
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the number of beds"
          value={formData[inputTypes.beds].value}
          error={!formData[inputTypes.beds].isValid}
          onChange={this.handleChange(inputTypes.beds)}
          onBlur={this.handleInputValidation(inputTypes.beds)}
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
          helperText="Please select the number of baths"
          required select fullWidth
          className={classes.textField}
          value={formData[inputTypes.baths].value}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          error={!formData[inputTypes.baths].isValid}
          onChange={this.handleChange(inputTypes.baths)}
          onBlur={this.handleInputValidation(inputTypes.baths)}
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
          defaultValue={formData[inputTypes.date].value}
          error={!formData[inputTypes.date].isValid}
          onChange={this.handleChange(inputTypes.date)}
          onBlur={this.handleInputValidation(inputTypes.date)}
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
          defaultValue={formData[inputTypes.time].value}
          error={!formData[inputTypes.time].isValid}
          onChange={this.handleChange(inputTypes.time)}
          onBlur={this.handleInputValidation(inputTypes.time)}
        />

        {/* email */}
        <TextField
          id="outlined-email"
          label="Email"
          margin="normal"
          variant="outlined"
          required fullWidth
          className={classes.textField}
          value={formData[inputTypes.email].value}
          error={!formData[inputTypes.email].isValid}
          onChange={this.handleChange(inputTypes.email)}
          onBlur={this.handleInputValidation(inputTypes.email)}
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
