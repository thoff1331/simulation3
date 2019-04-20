import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard from "../wiz";
import Dashbaord from "./Dashboard/dashboard";
import LogIn from "./Login";
import signUp from "./signUp";

export default (
  <Switch>
    <Route component={Dashbaord} exact path="/" />
    <Route component={Wizard} path="/new" />
    <Route component={signUp} exact path="/su" />
    <Route component={LogIn} exact path="/li" />
  </Switch>
);
