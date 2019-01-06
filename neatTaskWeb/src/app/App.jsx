import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import indexRoutes from "./routes/indexRoutes.js";

class App extends Component {
  render() {
    return (
      <Switch>
        {
          indexRoutes.map((prop, key) => {
            return <Route exact={prop.exact} path={prop.path} key={key} component={prop.component} />;
          })
        }
      </Switch>
    );
  }
}

export default App;
