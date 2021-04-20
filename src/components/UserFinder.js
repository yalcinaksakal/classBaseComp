import { Fragment, Component } from "react";
import UsersContext from "../Store/users-context";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
      isInputDisabled: false,
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

  inputDisableHandler = () => {
    this.setState(prevState => {
      return {
        isInputDisabled: !prevState.isInputDisabled,
      };
    });
  };
  searchChangeHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            disabled={this.state.isInputDisabled}
            type="search"
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Search"
          />
        </div>
        <ErrorBoundary>
          {this.state.filteredUsers.length === 0 ? (
            <p style={{ textAlign: "center" }}>No matching users.</p>
          ) : (
            <Users
              users={this.state.filteredUsers}
              toggleUsers={this.inputDisableHandler}
            />
          )}
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
