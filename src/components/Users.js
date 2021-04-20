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
    //
  }
  componentDidUpdate(prevProps) {
    if (prevProps.users.length === this.props.users.length) return;
    // if (this.props.users.length === 0) throw new Error("No users provided!");
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
    const usersList = (
      <ul>
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
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
