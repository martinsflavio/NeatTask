import React, { Component } from "react";

import { BookingForm, HeaderCustom } from "../../containers";

class BookingPage extends Component {
  render() {
    return (
      <div>
        <HeaderCustom/>
        <BookingForm/>
      </div>
    )
  }
}

export default BookingPage;
