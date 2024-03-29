import iValidator from "./iValidator.js";
import objDeepCopy from "../../objDeepCopy.js";
import makeObjIterable from "../../makeObjIterable.js";

const fValidator = form => {
  const iterableForm  = makeObjIterable(objDeepCopy(form));
  const validatedForm = objDeepCopy(form);
  const isFormValid   = [];

  //loop truth the formObj
  for (let input of iterableForm) {
    let { key, value }    = input,
        validatedInputObj = iValidator(key, value);

    // replace current inputObj for a validated version
    validatedForm[key] = {...validatedInputObj};
    // concat all isValid properties into a array
    isFormValid.push(validatedInputObj.isValid);
  }

  // update formValidation property and return it
  return {
    okToSubmit: isFormValid.every(item => item === true),
    bookingForm: validatedForm
  };
};

export default fValidator;
