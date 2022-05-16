import React, { Component } from "react";

export class Mount extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      Counter: 0,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("Render () ");
    return (
      <div>
        <h2>Mount Phase</h2>
        {/* Counter: {this.state.Counter} */}
        <h2> Counter: {this.state.Counter} </h2>
        <br />
      </div>
    );
  }
}

export default Mount;
