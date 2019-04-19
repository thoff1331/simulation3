import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import store, { ADD_HOME } from "./store";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      homes: [],
      redirect: false,
      homes: store.getState().homes
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }
  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleStateChange(e) {
    this.setState({
      state: e.target.value
    });
  }
  handleZipChange(e) {
    this.setState({
      zip: e.target.value
    });
  }
  handlePost() {
    Axios.post("/api/homes", {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }).then(response => {
      console.log("here");
      this.setState({
        homes: response.data,
        redirect: true
      });
    });
  }
  reduxButton = () => {
    const action = {
      type: ADD_HOME,
      payload: this.state.homes
    };
    store.dispatch(action);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form>
          <label> Name</label>
          <input onChange={this.handleNameChange} />
          <label>Address</label>
          <input onChange={this.handleAddressChange} />
          <label> City </label>
          <input onChange={this.handleCityChange} />
          <label>State </label>
          <input onChange={this.handleStateChange} />
          <label> Zip</label>
          <input onChange={this.handleZipChange} />
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button onClick={this.handlePost}>Add Property</button>
          <button onClick={this.handlePost}>Add Via Redux</button>
        </form>
      </div>
    );
  }
}

export default Wizard;
