import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Components render --------")
    return <div>
      
      {/* pass Props at the Child  */}

      PureComponent {this.props.Counter}</div>;
  }
}

export default PureComp;
