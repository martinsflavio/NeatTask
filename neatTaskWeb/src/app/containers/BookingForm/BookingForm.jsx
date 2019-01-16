import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index.js";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../../utils/objDeepCopy.js";
// bookingForm validation
import { iNames, rNames, iValidator, fValidator } from "../../../utils/formValidation/index.js";
// styled components
import { ButtonFullWidth } from "../../components/index.js";
import styles from "./bookingFormStyle.js";

class BookingForm extends Component {
  state = {
    okToSubmit: false,
    bookingForm: {
      zipCode: {
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
        value: "",
        isRequired: true,
        isValid: false,
        isError: false,
        errorMessage: "Invalid Email",
        validations: [
          rNames.required,
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
        {/* Zip Code */}
        <TextField
          id="outlined-zipCode"
          label="Zip Code"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={bookingForm[iNames.zipCode].isRequired}
          value={bookingForm[iNames.zipCode].value}
          error={bookingForm[iNames.zipCode].isError}
          helperText={
            bookingForm[iNames.zipCode].isError ?
              bookingForm[iNames.zipCode].errorMessage : null
          }
          onChange={this.handleChange(iNames.zipCode)}
          onBlur={this.handleInputValidation(iNames.zipCode)}
        />

        {/* Beds */}
        <TextField
          id="outlined-select-beds"
          label="Beds"
          margin="normal"
          variant="outlined"
          select fullWidth
          className={classes.textField}
          required={bookingForm[iNames.beds].isRequired}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          value={bookingForm[iNames.beds].value}
          error={bookingForm[iNames.beds].isError}
          helperText={
            bookingForm[iNames.beds].isError ?
              bookingForm[iNames.beds].errorMessage : null
          }
          onChange={this.handleChange(iNames.beds)}
          onBlur={this.handleInputValidation(iNames.beds)}
        >
          {bookingForm.beds.nBeds.map(option => (
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
          required={bookingForm[iNames.baths].isRequired}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          value={bookingForm[iNames.baths].value}
          error={bookingForm[iNames.baths].isError}
          helperText={
            bookingForm[iNames.baths].isError ?
              bookingForm[iNames.baths].errorMessage : null
          }
          onChange={this.handleChange(iNames.baths)}
          onBlur={this.handleInputValidation(iNames.baths)}
        >
          {bookingForm.baths.nBaths.map(option => (
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
          required={bookingForm[iNames.date].isRequired}
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue={bookingForm[iNames.date].value}
          error={bookingForm[iNames.date].isError}
          helperText={
            bookingForm[iNames.date].isError ?
              bookingForm[iNames.date].errorMessage : null
          }
          onChange={this.handleChange(iNames.date)}
          onBlur={this.handleInputValidation(iNames.date)}
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
          required={bookingForm[iNames.time].isRequired}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          defaultValue={bookingForm[iNames.time].value}
          error={bookingForm[iNames.time].isError}
          helperText={
            bookingForm[iNames.time].isError ?
              bookingForm[iNames.time].errorMessage : null
          }
          onChange={this.handleChange(iNames.time)}
          onBlur={this.handleInputValidation(iNames.time)}
        />

        {/* email */}
        <TextField
          id="outlined-email"
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.textField}
          required={bookingForm[iNames.date].isRequired}
          value={bookingForm[iNames.email].value}
          error={bookingForm[iNames.email].isError}
          helperText={
            bookingForm[iNames.email].isError ?
              bookingForm[iNames.email].errorMessage : null
          }
          onChange={this.handleChange(iNames.email)}
          onBlur={this.handleInputValidation(iNames.email)}
        />

        <ButtonFullWidth
          variant="contained"
          color="primary"
          onClick={ e => this.handleFormValidationAndSubmit(e) }>
          Submit
        </ButtonFullWidth>
      </form>
    );
  }
}

const mapStateToProps = ({bookingReducer}) => {
  return {
    bookingReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    postBookingForm: formObj => dispatch(actions.postBookingForm(formObj))
  }
};

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// injecting Material UI theme
const BookingFormWithStyle = withStyles(styles)(BookingForm);

export default connect(mapStateToProps, mapDispatchToProps)(BookingFormWithStyle);
