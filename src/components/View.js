import React from "react";
import "./Styles.css"

let View = ({ currentView, setView }) => {

  return currentView && (
    <div className="panel panel-primary" id="viewContainer">
      <div id="viewContent">
      <div className="panel-header bg-primary">
        <h2>Selected User</h2>
        <p>Name: {currentView.username}</p>
        <p>Location: {currentView.location}</p>
        <p>Products Purchased: {currentView.products_purchased}</p>
      </div>
      <div className="panel-body">
        <button onClick={() => setView(false)}>Back to Users</button>
      </div>
      </div>
    </div>
  );
};

export default View;
