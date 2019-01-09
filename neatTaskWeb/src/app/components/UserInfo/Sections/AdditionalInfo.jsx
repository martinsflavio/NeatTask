import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { GridItem, GridContainer } from "../../../components";
import makeObjIterable from "../../../../utils/makeObjIterable";
import objDeepCopy from "../../../../utils/objDeepCopy";

const styles = theme => ({

});

const AdditionalInfo = (props) => {
  const iterableObj = makeObjIterable(objDeepCopy(props.data));
  let elementsList = [];

  // iterate over parent obj exposing the key:value pairs of child obj
  for (const item of iterableObj) {
    const { key, value } = item;

    const element = (
      <GridItem key={key} xs={12} sm={4}>
        <Typography align="left" color="inherit" variant="h6" >{key}</Typography>
        {
          // iterating over the array
          value.map((item, i) => (
            <Fragment key={i}>
              <Typography key={i} align="left" color="inherit" variant="subtitle1" >
                {item}</Typography>
            </Fragment>
          ))
        }
      </GridItem>
    );

    // for each iteration one element gets pushed to the array of elements
    elementsList.push(element);
  }

  return (
    <GridContainer  direction="row" justify="center" alignItems="flex-start">
      { elementsList }
    </GridContainer>
  );
};

AdditionalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdditionalInfo);
