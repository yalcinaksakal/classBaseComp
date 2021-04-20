import { Fragment, Component } from "react";
import UsersContext from "../Store/users-context";
import Users from "./Users";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    // infinite loop guard
    if (prevState.searchTerm === this.state.searchTerm) return;

    this.setState({
      filteredUsers: this.context.users.filter(user =>
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
          <input
            type="search"
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Search"
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
