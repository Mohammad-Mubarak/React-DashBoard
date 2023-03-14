import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import url from './api'

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // protect to go to login
  useEffect(() => {
    let userdata = localStorage.getItem("user");
    if (userdata) {
      navigate("/");
    }
  }, []);



  var LoginBtn = async () => {
    let data = await fetch(`${url}/login`, {
      // integrate backend into front end
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
        "headers":{
            Authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` // setting token in header 
          }
         } 
      },
    );

    data = await data.json(); // converting response to json
    console.log(data.userval);
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data.userval)); // json to string bcz we can not strore directly json
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
    } else {
      console.log("data not found");
    }

    navigate("/");
  };

  return (
    <div className="sign">
      <h1 className="cen">Login User</h1>

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

      <button onClick={LoginBtn} className="btn-1" type="button">
        Login
      </button>
    </div>
  );
}

export default Login;



// import React, { useEffect } from "react";