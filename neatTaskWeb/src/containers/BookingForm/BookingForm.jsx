import React, { Component } from "react";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../utils/objDeepCopy.js";
import makeObjIterable from "../../utils/makeObjIterable.js";
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
        value:"",
        error: false
      },
      time: {
        value:"",
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

    this.setState({...newState});

  };
  handleFormValidation = () => {
    const newObj = makeObjIterable(objDeepCopy(this.state).formData);
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
          fullWidth autoFocus required
          className={classes.textField}
          value={formData[inputType.zipCode].value}
          error={formData[inputType.zipCode].error}
          onChange={this.handleChange(inputType.zipCode)}
          onBlur={this.handleInputValidation(inputType.zipCode)}
        />

        {/* Beds */}
        <TextField
          id="outlined-select-beds"
          select
          label="Beds"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the number of beds"
          value={formData[inputType.beds].value}
          error={formData[inputType.beds].error}
          onChange={this.handleChange(inputType.beds)}
          onBlur={this.handleInputValidation(inputType.beds)}
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
          select fullWidth
          label="Baths"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          value={formData[inputType.baths].value}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the number of baths"
          error={formData[inputType.baths].error}
          onChange={this.handleChange(inputType.baths)}
          onBlur={this.handleInputValidation(inputType.baths)}
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
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={formData[inputType.date].value}
          error={formData[inputType.date].error}
          onChange={this.handleChange(inputType.date)}
          onBlur={this.handleInputValidation(inputType.date)}
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
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={formData[inputType.time].value}
          error={formData[inputType.time].error}
          onChange={this.handleChange(inputType.time)}
          onBlur={this.handleInputValidation(inputType.time)}
        />

        {/* email */}
        <TextField
          id="outlined-email"
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={formData[inputType.email].value}
          error={formData[inputType.email].error}
          onChange={this.handleChange(inputType.email)}
          onBlur={this.handleInputValidation(inputType.email)}
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
