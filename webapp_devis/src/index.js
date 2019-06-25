import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Devis_demolition from "./container/Devis/Demolition";
import Devis_serrurerie from "./container/Devis/Serrurerie";
import Devis_platrerie from "./container/Devis/Platrerie";
import Devis_plomberie from "./container/Devis/Plomberie";
import Devis_electricite from "./container/Devis/Electricite";
import Devis_Main from "./container/Devis/Main";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Devis_Main} />
        <Route exact path="/demolition" component={Devis_demolition} />
        <Route exact path="/serrurerie" component={Devis_serrurerie} />
        <Route exact path="/platrerie" component={Devis_platrerie} />
        <Route exact path="/plomberie" component={Devis_plomberie} />
        <Route exact path="/electricite" component={Devis_electricite} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.unregister();
