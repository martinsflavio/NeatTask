import React, { Component } from "react";

import { BookingForm } from "../../containers";
import Layout from "../../layout/Layout.jsx";

class BookingPage extends Component {
  render() {
    return (
      <Layout>
        <BookingForm/>
      </Layout>
    )
  }
}

export default BookingPage;
