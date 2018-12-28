import * as inputType from "../constantTypes/inputTypes";
import rules from "../rules/rules.js";

const validate = inputObj => {
  let resultArray = [];
  const { validations, value }= inputObj;

  if (Array.isArray(validations)) {
    validations.forEach(validation => {
      // checks if array current index is an object
      if (typeof validation === "object" && validation !== null) {
        let key = Object.keys(validation)[0], v = validation[key];

        resultArray.push(rules[key](value, v));
      } else {
        resultArray.push(rules[validation](value));
      }

    });
  }
  return resultArray.every( item => item === true);
};

const inputValidator = (type, inputObj) => {
  switch (type) {
    case inputType.zipCode: return validate(inputObj);
    case inputType.email:   return validate(inputObj);
    case inputType.beds:    return validate(inputObj);
    case inputType.baths:   return validate(inputObj);
    case inputType.date:    return validate(inputObj);
    case inputType.time:    return validate(inputObj);
    default: return inputObj;
  }
};

export default inputValidator;
