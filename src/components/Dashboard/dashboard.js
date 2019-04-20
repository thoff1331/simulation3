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
  handleClick() {
    alert("Hello");
  }

  render() {
    return (
      <div className="hey">
        {this.state.homes.map((val, index) => {
          return (
            <div className="cardz">
              <House
                key={val.index}
                name={val.name}
                address={val.address}
                city={val.city}
                state={val.state}
                zip={val.zip}
                img={val.img}
                phone={val.phone}
              />
              <button onClick={() => this.handleDelete(val.id)}>Delete</button>
              <button
                onClick={() => {
                  alert("Phone # 435-633-3142");
                }}
              >
                Contact
              </button>
              <button
                onClick={() => {
                  alert("Added to Favorites");
                }}
              >
                Add to Favorites
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashbaord;
