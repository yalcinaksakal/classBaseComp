import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "aghia" },
  { id: "u2", name: "julie" },
  { id: "u3", name: "jane" },
];

class Users extends Component {
  // const [showUsers, setShowUsers] = useState(true);

  state:{}

  toggleUsersHandler = () => {
    this.setState(curState => !curState);
  };

  usersList = (
    <ul>
      {DUMMY_USERS.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  render() {
    return (
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}

export default Users;
