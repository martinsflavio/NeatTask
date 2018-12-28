import iValidator from "./iValidator.js";
import objDeepCopy from "../../objDeepCopy";
import makeObjIterable from "../../makeObjIterable";

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
    isFormValid: isFormValid.every(result => result === true),
    validatedForm: validatedForm
  };
};

export default fValidator;
