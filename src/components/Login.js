import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form className="form">
        <label> UserName</label>
        <input />
        <label>PassWord </label>
        <input />
        <button> Log In</button>
        <button> Forgot PassWord </button>
      </form>
    );
  }
}

export default Login;
