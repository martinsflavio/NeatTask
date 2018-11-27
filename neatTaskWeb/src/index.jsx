import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// app routes
import indexRoutes from "./routes/indexRoutes";

// styles
import "./index.module.scss";

const app = (
  <BrowserRouter>
    <Switch>
      {
        indexRoutes.map((prop, key) => {
          return <Route exact={prop.exact} path={prop.path} key={key} component={prop.component} />;
        })
      }
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
