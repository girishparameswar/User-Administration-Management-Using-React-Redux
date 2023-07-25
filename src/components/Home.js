import React from "react";
import logo from "../images/logo.svg";
let Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to User Administration App</h1>
      <img
        src={logo}
        height="250px"
        width="250px"
        className="App-logo"
        alt="logo"
      />
    </div>
  );
};
export default Home;
