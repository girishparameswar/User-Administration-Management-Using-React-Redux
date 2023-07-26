import React, { useCallback  } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import Users from "./Users";
import Create from "./Create";
import add_user from "../actions/add";
import rem_user from "../actions/remove";
import view_user from "../actions/viewdetails";

let App = (props) => {
  const getUser = useCallback((id) => {
    return props.users_data.filter((user) => props.users_data.indexOf(user) === parseInt(id)
    );
  })
  let createUser = (newUser) => {
    props.addUser(newUser);
  };

  let removeparentElem = (user) => {
    props.removeUser(user);

  };
    
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="fluid-container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route index path="/home" element={<Home />} />

          <Route
            path="/users"
            element={
              <Users
                user={props.users_data}
                onfetch={getUser}
                onRemove={removeparentElem}
              />
            }
          />

          <Route
            path="/create"
            element={<Create onaddusers={createUser} />}
          />
        </Routes>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    users_data: state
  }
}

const mapDispatchToProps = {
  addUser: add_user,
  removeUser: rem_user,
  viewUser: view_user
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
