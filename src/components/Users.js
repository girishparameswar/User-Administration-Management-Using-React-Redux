import React, {useState} from "react";
import View from "./View";
import "./Styles.css";

let Users = ({ user: users, onRemove }) => {
  let [showView, setView] = useState(false);
  let [currentView, setCurrentView] = useState({});
  const removeUser = (user) => {
    onRemove(user);
  };

  const handleView = (user) => {
    setView(!showView)
    setCurrentView(user)
  }

  let UserTable = () =>
  users && users.length > 0
    ? users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.location}</td>
            <td>{user.products_purchased}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => removeUser(user)}>
                Remove
              </button>{" "}
              &nbsp;&nbsp;&nbsp;
              <button className="btn btn-primary" onClick={() => handleView(user)}>View</button>
            </td>
          </tr>
        );
      })
    : <h2 className="nouserMemo">No Users</h2>;

  return (
    <div>
      <table className="table table-light">
      <thead className="thead bg-danger">
        <tr>
          <th>Username</th>
          <th>Location</th>
          <th>Products Purchased</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <UserTable/>
      </tbody>
    </table>
    {showView  && <View currentView={currentView} setView={setView}/>}
    </div>
  );
};

export default Users;
