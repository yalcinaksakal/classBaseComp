import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: true };
  }

  // state = { showUsers: false };
  componentDidMount() {
    console.log("component Users mounted");
  }
  componentDidUpdate() {
    console.log("component Users updated");
  }
  componentWillUnmount() {
    console.log("component Users will unmount");
  }
  toggleUsersHandler = () => {
    this.setState(prevState => {
      return { showUsers: !prevState.showUsers };
    });
    this.props.toggleUsers();
  };

  render() {
    const usersList = this.props.users.length ? (
      <ul>
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    ) : (
      <p>No matching user.</p>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
