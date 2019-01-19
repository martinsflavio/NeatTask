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

// Rules Obj
const rules = {
  matchRegexp: (value, regexp) => {
    const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
    return (isEmpty(value) || validationRegexp.test(value));
  },
  isExisty: value => isExisty(value),

  isEmpty: value => isEmpty(value),

  required: value => !isEmpty(value),

  trim: value => !isEmptyTrimed(value),

  isString: value => !isEmpty(value) || typeof value === "string" || value instanceof String,
  minStringLength: (value, length) => rules.isString(value) && value.length >= length,
  maxStringLength: (value, length) => rules.isString(value) && value.length <= length,

  isPositive: (value) => {
    if (isExisty(value)) {
      return (rules.isNumber(value) || rules.isFloat(value)) && value >= 0;
    }
    return true;
  },

  maxNumber: (value, max) => isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),

  minNumber: (value, min) => isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),

  maxFloat: (value, max) => isEmpty(value) || parseFloat(value) <= parseFloat(max),

  minFloat: (value, min) => isEmpty(value) || parseFloat(value) >= parseFloat(min),

  // eslint-disable-next-line
  isEmail: value => rules.matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i),

  isZipCode: value => rules.matchRegexp(value, /(^\d{5}$)|(^\d{5}-\d{4}$)/),

  isNumber: value => rules.matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i),

  isFloat: value => rules.matchRegexp(value, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i),

  isTime: value => rules.matchRegexp(value, /^[0-2][0-3]:[0-5][0-9]$/),

  isDate: (value) => {
    let objDate, mSeconds, currentDate, day, month, year;

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
    if (objDate.getFullYear() !== year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
      return false;
    }
    // checks if the input date is in the past
    currentDate = new Date();
    if (currentDate.getFullYear() > year ||
        currentDate.getMonth() > month ||
        currentDate.getDate() > day) {
      return false;
    }
    // otherwise return true
    return true;
  },

  isTimePast: (value) => {
    let hours, minutes, currentMinutes, currentHours, objDate;

    objDate = new Date();
    currentHours   = objDate.getHours();
    currentMinutes = objDate.getMinutes();

    if (!rules.isString(value)) {
      return false;
    }
    // expected format is 00:00 - 24H
    if (value.length !== 5 || value.substring(2,3) !== ":") {
      return false;
    }
    // subtraction will cast variables to integer implicitly (needed
    // for !== comparing)
    hours = value.substring(0,2) - 0;
    minutes = value.substring(3,5) - 0;
    // modifying 0 hours to 24 for easier validation
    if ( hours === 0) {
      hours = 24;
    }
    // test hours range
    if (!rules.isNumber(hours) || !rules.isRange(hours, {min: 0, max: 24})) {
      return false;
    }
    // test minutes range
    if (!rules.isNumber(minutes) || !rules.isRange(minutes, {min: 0, max: 60})) {
      return false;
    }
    // check for time in the past
    if (hours < currentHours) {
      return false;
    } else if (hours > currentHours) {
      return true;
    } else if (hours === currentHours) {
      if (minutes < currentMinutes) {
        return false;
      }
    }
    // if pass all the checks return true
    return true;
  },

  isRange: (value, range) => {
    return (
      rules.maxNumber(value, range.max) &&
      rules.minNumber(value, range.min)
    );
  }
};

export default rules;
