import React from "react";
import serializeForm from "form-serialize";
import "./Styles.css"

let Create = ({onaddusers}) => {
  const createUser = (event) => {
    event.preventDefault();
    onaddusers(serializeForm(event.target, { hash: true }));
    document.getElementById("btnSubmit").className = "btn btn-success";
    document.getElementById("btnSubmit").innerText = "Created Successfully";
  };

  return (
    <div className="formContainer">
      <h1>Create Form</h1>
      <hr />
      <form className="form-inline" onSubmit={createUser}>
        <input
          className="form-control"
          name="username"
          type="text"
          placeholder="Username"
        />
        <br />
        <br />
        <input
          className="form-control"
          name="location"
          type="text"
          placeholder="Location"
        />
        <br />
        <br />
        <button id="btnSubmit" className="btn btn-primary" type="submit">
          Create User
        </button>
        <br />
      </form>
    </div>
  );
};

export default Create;
