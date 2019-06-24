import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Devis_Main from "./container/Devis/Main";
import Devis_Démolition from "./container/Devis/Démolition";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Devis_Main} />
      <Route exact path="/Démolition" component={Devis_Démolition} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.unregister();
