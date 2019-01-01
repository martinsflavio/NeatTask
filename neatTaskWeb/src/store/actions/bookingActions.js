import * as aTypes from "./actionTypes.js";
import axios from "../../utils/axiosAPI.js";
import bookingFormSanitiser from "../../utils/bookingFormSanitiser.js";

export const postBookingFormSuccess = resp => ({type: aTypes.POST_BOOKING_FORM_SUCCESS, payload: resp});

export const postBookingFormFailed = error => ({type: aTypes.POST_BOOKING_FORM_FAILED, payload: error});

// Async Actions
export const postBookingForm = formObj => {
  const sanitisedForm = bookingFormSanitiser(formObj);
  // TODO apply second round of validations to the form before submission here if needed

  return dispatch => {
    axios.post(`/bookingForm.json`, sanitisedForm)
      .then( resp => {
        dispatch(postBookingFormSuccess(resp));
      })
      .catch(error => {
        dispatch(postBookingFormFailed(error));
      });
  }
};