import React, { Component } from "react";

import { BookingForm } from "../../containers";
import { HeaderCustom } from "../../components";

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
