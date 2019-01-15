import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import indexRoutes from "./routes/indexRoutes.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline/>
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
      </Fragment>
    );
  }
}

export default App;
