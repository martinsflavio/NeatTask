import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import indexRoutes from "./routes/indexRoutes.js";

class App extends Component {
  render() {
    return (
      <Switch>
        {
          indexRoutes.map((prop, key) => {
            return (
              <Route
                key={key}
                {...prop} />
            );
          })
        }
      </Switch>
    );
  }
}

export default App;
