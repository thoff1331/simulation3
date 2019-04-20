import React, { Component } from "react";

class House extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="cardz">
        <div className="cards">
          <p> Contact Name:{this.props.name}</p>
          <p> Address:{this.props.address}</p>
          <p> City:{this.props.city}</p>
          <p> State:{this.props.state}</p>
          <p> Zip Code:{this.props.zip}</p>
          <p>{this.props.phone}</p>
          <img src={this.props.img} alt={this.props.name} />
        </div>
      </div>
    );
  }
}

export default House;
