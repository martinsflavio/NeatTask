import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import BookingPage from "./BookingPage/BookingPage";

class App extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" component={LandingPage}/>
        <Route path="/book" component={BookingPage}/>
      </Switch>
    );
  }
}

export default App;
