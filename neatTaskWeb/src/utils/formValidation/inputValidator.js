import * as inputType from "./inputTypes";
import validationRules from "./validationRules/validationRules.js";


const validate = inputObj => {
  let resultArray = [];
  const { validations, value }= inputObj;


  if (Array.isArray(validations)) {
    validations.forEach(validation => {
      console.log(validation);
      resultArray.push(validationRules[validation](value));
    });
  }



  console.log(resultArray);
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
