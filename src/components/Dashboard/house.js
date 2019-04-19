import React, { Component } from "react";

class House extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
        <p>{this.state.zip}</p>
      </div>
    );
  }
}

export default House;
