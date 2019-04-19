import React, { Component } from "react";
import House from "./house";
import axios from "axios";

class Dashbaord extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    axios
      .delete(`/api/homes/${id}`, {
        data: {
          id: id
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
          homes: response.data
        });
      });
  }
  componentDidMount() {
    axios.get("/api/homes").then(res => {
      this.setState({
        homes: res.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.homes.map((val, index) => {
          return (
            <div>
              <House
                key={val.index}
                name={val.name}
                address={val.address}
                city={val.city}
                zip={val.zip}
              />
              <button onClick={() => this.handleDelete(val.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashbaord;
