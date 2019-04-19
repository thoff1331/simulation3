import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import Wizard from "../wiz";
import Dashbaord from "./Dashboard/dashboard";

export default (
  <Switch>
    <Route component={Wizard} path="/new" />
    <Route component={List} path="/PC" />
    <Route component={Dashbaord} exact path="/" />
  </Switch>
);
