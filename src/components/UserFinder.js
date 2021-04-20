import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "aghia" },
  { id: "u2", name: "julie" },
  { id: "u3", name: "jane" },
  { id: "u4", name: "aga" },
  { id: "u5", name: "julia" },
  { id: "u6", name: "janet" },
];

class UserFinder extends Component {
  //   static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // infinite loop guard
    if (prevState.searchTerm === this.state.searchTerm) return;

    this.setState({
      filteredUsers: DUMMY_USERS.filter(user =>
        user.name.includes(this.state.searchTerm)
      ),
    });
  }

  searchChangeHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
