import React, { Component } from "react";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../utils/objDeepCopy.js";
import makeFormObjIterable from "../../utils/formValidation/makeFormObjIterable.js";
import inputValidator from "../../utils/formValidation/validationRules.js";
import * as inputType from "../../utils/formValidation/inputType.js";
// styled components
import { ButtonFullWidth } from "../../components";
import styles from "./style.js";

class BookingForm extends Component {
  state = {
    isFormValid: true,
    formData: {
      zipCode: {
        value:"",
        error: false
      },
      beds: {
        value:"",
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        error: false
      },
      baths: {
        value:"",
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        error: false
      },
      date: {
        value:"2018-12-17",
        error: false
      },
      time: {
        value:"07:30",
        error: false
      },
      email: {
        value: "",
        error: false
      }
    }
  };

  handleChange = inputField => e => {
    let newState = objDeepCopy(this.state);

    newState.formData[inputField].value = e.target.value;

    this.setState({
      ...newState
    });
  };
  handleInputValidation = (inputField) => () => {
    const newState = objDeepCopy(this.state);
    const value = newState.formData[inputField].value;

    newState.formData[inputField].error = !inputValidator(inputField, value);

  };
  handleFormValidation = () => {
    const newObj = makeFormObjIterable(objDeepCopy(this.state).formData);
    for (const input of newObj) {
      console.log(input);
    }
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.isFormValid) {
      console.log(this.state.formData);
    } else {
      console.log("ERROR: Please check the RED fields for errors.")
    }

  };

  render() {
    const { classes } = this.props;
    const { formData, isFormValid } = this.state;

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
          value={formData.zipCode.value}
          onChange={this.handleChange(inputType.zipCode)}
          onBlur={this.handleInputValidation(inputType.zipCode)}
          error={formData.zipCode.error}
        />

        {/* Beds */}
        <TextField
          id="outlined-select-beds"
          select
          label="Beds"
          className={classes.textField}
          value={formData.beds.value}
          onChange={this.handleChange("beds")}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the number of beds"
          margin="normal"
          variant="outlined"
          fullWidth
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
          select
          label="Baths"
          className={classes.textField}
          value={formData.baths.value}
          onChange={this.handleChange("baths")}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the number of baths"
          margin="normal"
          variant="outlined"
          fullWidth
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
          defaultValue={formData.date.value}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleChange("date")}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        {/* Time */}
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue={formData.time.value}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={this.handleChange("time")}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        {/* email */}
        <TextField
          id="outlined-email"
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={formData.email.value}
          onChange={this.handleChange(inputType.email)}
          onBlur={this.handleInputValidation(inputType.email)}
          error={formData.email.error}
        />

        <ButtonFullWidth
          disabled={!isFormValid}
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
