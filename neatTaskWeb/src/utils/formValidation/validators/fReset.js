import objDeepCopy from "../../objDeepCopy.js";
import makeObjIterable from "../../makeObjIterable.js";

const fReset = form => {
  const iterableForm  = makeObjIterable(objDeepCopy(form));
  let resetForm = objDeepCopy(form);

  //loop truth the formObj
  for (let input of iterableForm) {
    const key      = input.key;
    let inputObj   = input.value;
    const clear    = { isError: false, isValid: false, value: "" };
    
    resetForm[key] = {
      ...inputObj,
      ...clear
    };
  }
  return resetForm;
};

export default fReset;
