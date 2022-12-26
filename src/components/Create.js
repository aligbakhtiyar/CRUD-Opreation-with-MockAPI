import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow_Origin": "*" };
  const handleSubmit = () => {
    console.log('clicked')
    axios.post("https://63a920e1f4962215b58db2d5.mockapi.io/crud-mockapi", {
      name: name,
      email: email,
      header,
    });
  };

  return (
    <>
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
