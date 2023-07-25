import React, { useCallback  } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Home from "./Home";
import Users from "./Users";
import Create from "./Create";
import View from "./View";
import add_user from "../actions/add";
import rem_user from "../actions/remove";
import view_user from "../actions/viewdetails";

let App = (props) => {
  console.log('App props: ', props)
  const getUser = useCallback((id) => {
    return props.users_data.filter((user) => props.users_data.indexOf(user) === parseInt(id)
    // {
    //   if() {
    //     return user
    //   }
    // }
    
    );
  })
  console.log('getUser: ', getUser())
  let createUser = (newUser) => {
    props.addUser(newUser);
  };

  let removeparentElem = (user) => {
    props.removeUser(user);
    console.log("User selected for del: ", user);
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
          <Route path="/home" element={<Home />} />

          <Route
            path="/users"
            element={
              <Users
                user={props.users_data}
                onRemove={removeparentElem}
              />
            }
          />

          <Route
            path="/create"
            element={<Create onaddusers={createUser} />}
          />

          <Route
            path="/view/:id"
            element={<View onfetch={getUser} onUser={{}} />}
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
