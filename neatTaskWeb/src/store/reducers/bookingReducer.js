import * as aTypes from "../actions/actionTypes.js";
import objDeepCopy from "../../utils/objDeepCopy.js";

export const initialState = {
  bookingForm: null
};

// Util func to sanitise form Obj
const bookingFormObjCreator = formObj => {
  console.log("bookingFormCreator");
  return formObj;
};

const setBookingForm = (state, { payload }) => {
  let newState = objDeepCopy(state);

  //TODO remove unnecessary data from form obj here

  return {
    ...newState,
    bookingForm: {...payload}
  };
};

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case aTypes.POST_BOOKING_FORM: return setBookingForm(state, action);
    default: return state;
  }
};

export default booking;
