import objDeepCopy from "./objDeepCopy";
/*
import * as rNames from "./formValidation/constants/rulesNames";

const state = {
  okToSubmit: false,
  bookingForm: {
    zipCode: {
      value:"",
      isRequired: true,
      isValid: false,
      isError: false,
      errorMessage: "Please valid zip code required.",
      validations: [
        rNames.required,
        rNames.isZipCode
      ]
    },
    beds: {
      value:"",
      isValid: false,
      nBeds: [0,1,2,3,4,5,6,7,8,9,10],
      isError: false,
      errorMessage: "",
      validations: [{[rNames.isRange]: {max: 10, min: 0}}]
    },
    baths: {
      value:"",
      isValid: false,
      nBaths: [0,1,2,3,4,5,6,7,8,9,10],
      isError: false,
      errorMessage: "",
      validations: [{[rNames.isRange]: {max: 10, min: 0}}]
    },
    date: {
      value:"",
      isRequired: true,
      isValid: false,
      isError: false,
      errorMessage: "Invalid Date",
      validations: [
        rNames.required,
        rNames.isDate
      ]
    },
    time: {
      value:"",
      isValid: false,
      isError: false,
      errorMessage: "Invalid Time",
      validations: [rNames.isTime]
    },
    email: {
      value: "",
      isRequired: true,
      isValid: false,
      isError: false,
      errorMessage: "Invalid Email",
      validations: [
        rNames.required,
        rNames.isEmail
      ]
    }
  },
};

Object.entries(state.bookingForm).forEach(([key, obj]) =>{

  console.log(key);
  console.log(obj);
});*/

//TODO REFACTORING
const makeObjIterable = obj => {
  let newObj;
  if (obj === null || obj === undefined || typeof obj !== "object" || Array.isArray(obj)) {
   newObj = obj;
  } else {
    newObj = objDeepCopy(obj);
    newObj[Symbol.iterator] = () => {
      const key  = Object.keys(newObj);
      const value  = Object.values(newObj);
      let currentKeyIndex = 0;

      return {
        next () {
          let index = currentKeyIndex;
          const obj = {key: key[index], value:value[index]};
          currentKeyIndex++;

          if (index < key.length) {
            return {
              value: obj,
              done: false
            }
          }

          return {
            value: null,
            done: true
          };
        }
      }

    };
  }

  return newObj;
};

export default makeObjIterable;
