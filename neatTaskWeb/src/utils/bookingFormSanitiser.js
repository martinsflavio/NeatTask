import makeObjIterable from "./makeObjIterable.js";

// Util func to sanitise bookingForm Obj
const bookingFormSanitiser = formObj => {
  console.log("bookingFormSanitiser");
  const iterableObj = makeObjIterable(formObj);
  let sanitisedObj = {};

  for (let input of iterableObj) {
    let {key, value:{value}} = input;
    sanitisedObj[key] = value;
  }

  return sanitisedObj;
};

export default bookingFormSanitiser;
