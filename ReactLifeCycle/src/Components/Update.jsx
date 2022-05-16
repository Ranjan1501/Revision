import React, { Component } from "react";
import PureComp from "./PureComp";

export class Update extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      Counter: 0,
    };
    console.log("Constructor");
  }
  incrementCounter = () => {
    this.setState({ Counter: this.state.Counter + 1 });
  };
  decrementCounter = () => {
    this.setState({ Counter: this.state.Counter - 1 });
  };
  // 1 method
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // 2. method
  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate");
    return true;
  }

  // 4. method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate");
    return null;
  }

  // 5. method

  componentDidUpdate() {
    console.log("ComponetDidUpdate");
  }

  // 3 method
  render() {
    console.log("Render () ");
    return (
      <div>
        <h2>Update Phase</h2>
            {/* Counter: {this.state.Counter} */}
            
            {/* Props at the Parent */}
        <PureComp Counter={this.state.Counter} />
        <br />
        <button onClick={this.incrementCounter}> Inc</button>
        <button onClick={this.decrementCounter}> Dec</button>
      </div>
    );
  }
}

export default Update;
