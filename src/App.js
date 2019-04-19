import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Link } from "react-router-dom";
import routes from "./components/routes";
import Dashboard from "./components/Dashboard/dashboard";
import Wizard from "./wiz";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <div>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/PC">Past Competencies</Link>
          <Link to="/new"> Add New Property</Link>
        </div>
        <div>{routes}</div>
      </HashRouter>
    );
  }
}

export default App;
