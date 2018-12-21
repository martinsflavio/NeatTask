import * as inputType from "./inputType.js";

// Global Methods
const isExisty = value => {
  return value !== null && value !== undefined;
};

const isEmpty = value => {
  if (value instanceof Array) {
    return value.length === 0;
  }
  return value === "" || !isExisty(value);
};

const isEmptyTrimed = value => {
  if (typeof value === "string") {
    return (value.trim() === "");
  }
  return true;
};

// validator Obj
const validations = {
  matchRegexp: (value, regexp) => {
    const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
    return (isEmpty(value) || validationRegexp.test(value));
  },

  isEmpty: value => isEmpty(value),

  required: value => !isEmpty(value),

  trim: value => !isEmptyTrimed(value),

  isString: value => !isEmpty(value) || typeof value === "string" || value instanceof String,
  minStringLength: (value, length) => validations.isString(value) && value.length >= length,
  maxStringLength: (value, length) => validations.isString(value) && value.length <= length,

  isPositive: (value) => {
    if (isExisty(value)) {
      return (validations.isNumber(value) || validations.isFloat(value)) && value >= 0;
    }
    return true;
  },

  maxNumber: (value, max) => isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),

  minNumber: (value, min) => isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),

  maxFloat: (value, max) => isEmpty(value) || parseFloat(value) <= parseFloat(max),

  minFloat: (value, min) => isEmpty(value) || parseFloat(value) >= parseFloat(min),

  // eslint-disable-next-line
  isEmail: value => validations.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i),

  isZipCode: value => validations.matchRegexp(value, /(^\d{5}$)|(^\d{5}-\d{4}$)/),

  isNumber: value => validations.matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i),

  isFloat: value => validations.matchRegexp(value, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i),

  isInThisRange: function (value, min, max) {
    return (
      this.isNumber(value) &&
      this.maxNumber(value, max) &&
      this.minNumber(value, min)
    );
  },
  //TODO CHECK DATE IN THE PAST
  isDate: function (value) {
    let objDate,  // date object initialized from the value string
        mSeconds, // value in milliseconds
        day,      // day
        month,    // month
        year;     // year
    // date length should be 10 characters (no more no less)
    if (value.length !== 10) {
      return false;
    }
    // third and sixth character should be "-"
    if (value.substring(4, 5) !== "-" || value.substring(7, 8) !== "-") {
      return false;
    }
    // extract month, day and year from the value (expected format is yyyy-mm-dd)
    // subtraction will cast variables to integer implicitly (needed
    // for !== comparing)
    month = value.substring(5, 7) - 1; // because months in JS start from 0
    day = value.substring(8, 10) - 0;
    year = value.substring(0, 4) - 0;
    // test year range
    if (year < 1000 || year > 3000) {
      return false;
    }
    // convert value to milliseconds
    mSeconds = (new Date(year, month, day)).getTime();
    // initialize Date() object from calculated milliseconds
    objDate = new Date();
    objDate.setTime(mSeconds);
    // compare input date and parts from Date() object
    // if difference exists then date isn't valid

    //TODO CHECK FOR DATE IN THE PAST HERE
    if (objDate.getFullYear() !== year ||
      objDate.getMonth() !== month ||
      objDate.getDate() !== day) {
      return false;
    }
    // otherwise return true
    return true;
  }
};

const validator = (type, value) => {
  switch (type) {
    case inputType.zipCode: return validations.isZipCode(value);
    case inputType.email:   return validations.isEmail(value);
    case inputType.beds:    return validations.isInThisRange(value, 0, 10);
    case inputType.baths:   return validations.isInThisRange(value, 0, 10);
    case inputType.date:    return validations.isDate(value);
    case inputType.time:    return validations.required(value);
    default: return value;
  }
};

export default validator;
