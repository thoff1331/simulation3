import React, { Component } from "react";
import { Link } from "react-router-dom";

class signUp extends Component {
  render() {
    return (
      <form className="form">
        <label>Email</label>
        <input />
        <label> UserName</label>
        <input />
        <label>PassWord </label>
        <input />
        <button>Register</button>
        <Link to="/li">
          <button> Returning User</button>
        </Link>
      </form>
    );
  }
}

export default signUp;
