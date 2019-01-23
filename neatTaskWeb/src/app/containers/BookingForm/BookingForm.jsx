import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import objDeepCopy from "../../../utils/objDeepCopy.js";
// @material-ui core
import { Divider, Typography, MenuItem } from "@material-ui/core";
// styled components
import {
  Input, Card, GridContainer,
  GridItem, ButtonFullWidth } from "../../components/index";

// bookingForm validation
import { rNames, iValidator, fValidator } from "../../../utils/formValidation/index";

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

class BookingForm extends Component {
  state = {
    okToSubmit: false,
    bookingForm: {
      cleaningTitle: {
        label: "Cleaning Title",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Please provide a title to you cleaning",
        validations: [rNames.required]
      },
      bedroom: {
        label: "Beds",
        value: "",
        nBeds: [0,1,2,3,4,5,6,7,8,9,10],
        isValid: false,
        isError: false,
        errorMessage: "Select a number of bedrooms",
        validations: [rNames.required]
      },
      bathroom: {
        label: "Baths",
        value: "",
        nBaths: [0,1,2,3,4,5,6,7,8,9,10],
        isValid: false,
        isError: false,
        errorMessage: "Select a number of bedrooms",
        validations: [rNames.required]
      },
      sqft: {
        label: "Sq. Ft.",
        value: "",
        isValid: false,
        isError: false,
        errorMessage: "Only numbers",
        validations: []
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
            <GridItem xs={12}>
              <Typography variant="h6">Booking</Typography>
            </GridItem>

            <Divider variant="middle" />

            <form className={classes.formContainer} autoComplete="off">
              <GridContainer direction="row" justify="space-evenly" alignItems="stretch">
                <GridItem xs={12}>
                  <Input
                    id="cleaningTitle"
                    inputObj={bookingForm.cleaningTitle}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                </GridItem>

                <GridItem xs={4}>
                  <Input
                    id="bedroom"
                    select
                    inputObj={bookingForm.bedroom}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}>
                    {bookingForm.bedroom.nBeds.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Input>
                </GridItem>

                <GridItem xs={4}>
                  <Input
                    id="bathroom"
                    select
                    inputObj={bookingForm.bathroom}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}>
                    {bookingForm.bathroom.nBaths.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Input>
                </GridItem>

                <GridItem xs={4}>
                  <Input
                    id="sqft"
                    inputObj={bookingForm.sqft}
                    handleChange={this.handleChange}
                    handleValidation={this.handleInputValidation}/>
                </GridItem>

                <GridItem xs={12}>
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

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(BookingForm);