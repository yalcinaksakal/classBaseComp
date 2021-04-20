import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: error });
  }
  render() {
    return this.state.hasError ? (
      <p style={{ textAlign: "center" }}>{this.state.hasError.message}</p>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
