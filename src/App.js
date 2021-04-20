import React from "react";
import UserFinder from "./components/UserFinder";
import UsersContext from "./Store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "aghia" },
  { id: "u2", name: "julie" },
  { id: "u3", name: "jane" },
  { id: "u4", name: "aga" },
  { id: "u5", name: "julia" },
  { id: "u6", name: "janet" },
];

function App() {
  return (
    <UsersContext.Provider value={{ users: DUMMY_USERS }}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
