import React, { Fragment } from "react";
import PropTypes from "prop-types";

// material-ui core
import { MenuItem, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// styled components
import { Button } from "../../components";

// style
import styles from "./bookingFormStyle";

//TODO: abstracting list of beds to backend
const optionsList = [0,1,2,3,4,5,6,7,8,9,10];

class BookingForm extends React.Component {
  state = {
    zipCode: "",
    beds: "",
    baths: "",
    date: "2017-05-24",
    time: "07:30",
    email: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <form className={classes.container} noValidate autoComplete="off">
        {/* Zip Code */}
        <TextField
            id="outlined-zipCode"
            label="Zip Code"
            className={classes.textField}
            value={this.state.zipCode}
            onChange={this.handleChange("zipCode")}
            margin="normal"
            variant="outlined"
            fullWidth
          />

        {/* Beds */}
        <TextField
            id="outlined-select-beds"
            select
            label="Beds"
            className={classes.textField}
            value={this.state.beds}
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
            {optionsList.map(option => (
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
            value={this.state.baths}
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
            {optionsList.map(option => (
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
            defaultValue={this.state.date}
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
            defaultValue={this.state.time}
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
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <Button />
        </form>
      </Fragment>
    );
  }
}

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingForm);
