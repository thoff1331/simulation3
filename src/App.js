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
        <div className="links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <br />
          <Link to="/new"> Add New Property</Link>
          <br />
          <Link to="/li"> Log In</Link>
          <br />
          <Link to="/su">Sign Up!</Link>

          <br />
        </div>
        <div>{routes}</div>
        <div className="footer">
          <h1 />
        </div>
      </HashRouter>
    );
  }
}

export default App;
