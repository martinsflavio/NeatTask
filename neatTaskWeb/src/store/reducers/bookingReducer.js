import * as aTypes from "../actions/actionTypes.js";
import objDeepCopy from "../../utils/objDeepCopy.js";

export const initialState = {
  bookingForm: null,
  error: null
};

const postBookingFormSuccess = (state, { payload }) => {
  let newState = objDeepCopy(state);

  return {
    ...newState,
    bookingForm: {...payload}
  };
};

const postBookingFormFailed = (state, { payload }) => {
  let newState = objDeepCopy(state);

  return {
    ...newState,
    error: {...payload}
  };
};

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case aTypes.POST_BOOKING_FORM_SUCCESS: return postBookingFormSuccess(state, action);
    case aTypes.POST_BOOKING_FORM_FAILED:  return postBookingFormFailed(state, action);
    default: return state;
  }
};

export default booking;
