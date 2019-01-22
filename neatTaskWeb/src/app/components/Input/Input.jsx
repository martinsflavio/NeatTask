import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// Jss
const styles = theme => ({
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 100,
  },
});

const Input = props => {
  const { classes, inputObj, id, handleChange, handleValidation, ...rest } = props;

  return(
    <TextField
      fullWidth
      id={`outlined-${id.toLowerCase()}`}
      label={inputObj.label}
      margin="normal"
      variant="outlined"
      className={classes.textField}
      required={inputObj.validations.some(item => item === "required")}
      value={inputObj.value}
      error={inputObj.isError}
      helperText={ inputObj.isError ? inputObj.errorMessage : null }
      onChange={handleChange(id)}
      onBlur={handleValidation(id)}
      {...rest}
    />
  );
};


Input.propTypes = {
  classes: PropTypes.object.isRequired,
  inputObj: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(Input);
