import objDeepCopy from "../../objDeepCopy.js";
import * as iName from "../constants/inputNames.js";
import rules from "../rules/rules.js";

const validate = inputObj => {
  const newInputObj = objDeepCopy(inputObj);
  const { validations, value }= inputObj;
  let validationsResultList = [];

  if (Array.isArray(validations)) {
    validations.forEach(validation => {
      // checks if array current index is an object
      if (typeof validation === "object" && validation !== null) {
        let key = Object.keys(validation)[0], v = validation[key];
        validationsResultList.push(rules[key](value, v));
      } else {
        validationsResultList.push(rules[validation](value));
      }

    });
  }
  // update isValid property of the inputObj
  newInputObj.isValid = validationsResultList.every( item => item === true);
  newInputObj.isError   = !newInputObj.isValid;
  return newInputObj;
};

const iValidator = (type, inputObj) => {
  switch (type) {
    case iName.zipCode: return validate(inputObj);
    case iName.email:   return validate(inputObj);
    case iName.beds:    return validate(inputObj);
    case iName.baths:   return validate(inputObj);
    case iName.date:    return validate(inputObj);
    case iName.time:    return validate(inputObj);
    default: return inputObj;
  }
};

export default iValidator;
