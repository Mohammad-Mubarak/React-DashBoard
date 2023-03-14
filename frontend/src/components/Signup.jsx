// import e from 'express'
import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

import url from './api'

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // protect from visiting sign up user

  useEffect(() => {
    let userdata = localStorage.getItem("user");
    if (userdata) {
      navigate("/");
    }
  }, []);

  
  const print = async () => {
    const data = await fetch(`${url}/register`, {
      // integrate backend into front end
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsondata = await data.json(); // converting response to json

    localStorage.setItem("user", JSON.stringify(jsondata.result)); // json to string bcz we can not strore directly json
    localStorage.setItem("token", JSON.stringify(jsondata.token));
    navigate("/");
  };

  return (
    <div className="sign">
      <h1 className="cen">Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button onClick={print} className="btn-1" type="button">
        Submit
      </button>
    </div>
  );
}

export default Signup;
