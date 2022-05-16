import React, { Component } from "react";


// snippet inn VS code for export class component -- rce
export class ErrorBoundary extends Component {
  // snippet inn VS code for constructor-- rconst
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  // Error boundary has two phase method
  // 1 . getDerivedStateFrom(error)
  // 2.  componentDidCatchError( error, info)

  // note we can use either one or two method

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return this.props.children; // this refers to the component that we are actually rendering
    }
  }
}
