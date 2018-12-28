import inputValidator from "./inputValidator.js";
import objDeepCopy from "../../objDeepCopy";
import makeObjIterable from "../../makeObjIterable";

const formValidator = form => {
  const iterableForm =  makeObjIterable(objDeepCopy(form));
  let formBoolList = [];

  for (let input of iterableForm) {
    let { key } = input, { value } = input;
      console.log(key, value);
      formBoolList.push(inputValidator(key, value))
  }
  console.log(formBoolList);
  return formBoolList.every(item => item === true);
};

export default formValidator;
