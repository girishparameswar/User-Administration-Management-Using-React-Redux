import React from "react";
import { Link } from "react-router-dom";

let Users = ({ user: users, onRemove }) => {
  const removeUser = (user) => {
    onRemove(user);
  };

  let UserTable = () =>
    users && users.length > 0
      ? users.map((users, index) => {
          return (
            <tr key={index}>
              <td>{users.username}</td>
              <td>{users.location}</td>
              <td>{users.products_purchased}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeUser(users)}
                >
                  Remove
                </button>{" "}
                &nbsp;&nbsp;&nbsp;
                <Link className="btn btn-primary" to={"/view/" + index}>
                  View
                </Link>
              </td>
            </tr>
          );
        })
      : null;

  return (
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
        <UserTable />
      </tbody>
    </table>
  );
};

export default Users;
