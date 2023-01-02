import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow_Origin": "*" };

  const handleSubmit = (e) => {
    console.log("clicked");
    axios
      .post("https://63af37d3649c73f572b7f1d5.mockapi.io/crud_mockapi", {
        name: name,
        email: email,
        header,
      })

      history('/read')
      .then(() => {
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
      <h2>Create</h2>
      <Link to ="/read">
      <button className=""btn btn-primary> Show Data</button>
      </Link>
      
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          {name}
          {email}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
