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
      img: "",
      phone: "",
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
    this.handleImage = this.handleImage.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
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
      zip: this.state.zip,
      img: this.state.img,
      phone: this.state.phone
    }).then(response => {
      console.log("here");
      this.setState({
        homes: response.data,
        redirect: true
      });
    });
  }

  handleImage(e) {
    this.setState({
      img: e.target.value
    });
  }
  handlePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  render() {
    console.log(this.state.img);
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form className="form">
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
          <label>Phone Number</label>
          <input onChange={this.handlePhone} />
          <label>Image URL</label>
          <input onChange={this.handleImage} />
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button onClick={this.handlePost}>Add Property</button>
        </form>
      </div>
    );
  }
}

export default Wizard;
