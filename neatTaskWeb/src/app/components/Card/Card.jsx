import React from "react";
import PropTypes from "prop-types";
// @material-ui
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
// styled components
import { GridItem, GridContainer } from "../../components";

const styles = theme => ({
  root: {
    border: `1px solid ${grey[400]}`,
  },
  gridContainer: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },

});

const Card = props => {
  const { classes } = props;
  const listOfItem = ["Standard Cleaning", "Deep Cleaning", "Move In", "Move Out"];

  return (
    <Paper className={classes.root} elevation={0}>
      <GridContainer
        className={classes.gridContainer}
        direction="row"
         justify="flex-start"
         alignItems="flex-start"
      >
        <GridItem xs={12}>
          <Typography variant="h5" component="h3">
            Services Offered.</Typography>
          {
            listOfItem.map((item, index) =>(
              <Typography key={index} variant="body1" component="p">{ item }</Typography>
            ))
          }
        </GridItem>
      </GridContainer>
      <Divider />
      <Button className={classes.button} href="/" fullWidth>
        get started
      </Button>
    </Paper>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
