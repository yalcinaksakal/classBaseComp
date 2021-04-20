import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentDidMount() {
    console.log("component User mounted");
  }
  componentDidUpdate() {
    console.log("component User updated");
  }
  componentWillUnmount() {
    console.log("component User will unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
