import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios
      .get(`/api/teams?house${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          homes: response.data
        });
      });
  }
  render() {
    console.log(this.props.params);
    return (
      <div>
        <h1> Your Home Page</h1>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}
console.log(this.props.match.params.id);

export default Home;
