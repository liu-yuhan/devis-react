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
import Devis_revetements from "./container/Devis/Revetements";
import Devis_menuiseries from "./container/Devis/Menuiseries";
import Devis_peinture from "./container/Devis/Peinture";
import Devis_cuisine from "./container/Devis/Cuisine";
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
        <Route exact path="/revetements" component={Devis_revetements} />
        <Route exact path="/menuiseries" component={Devis_menuiseries} />
        <Route exact path="/peinture" component={Devis_peinture} />
        <Route exact path="/cuisine" component={Devis_cuisine} />
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
