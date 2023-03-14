import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import url  from "./api";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Addproduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [company, setCompany] = useState("");


  const click = async () => {
    // simple validation
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userid = JSON.parse(localStorage.getItem("user"))._id;
    const data = await fetch(`${url}/product`, {
      // integrate backend into front end
      method: "post",
      body: JSON.stringify({ name, price, category, userid, company }),
      headers: {
        "Content-Type": "application/json",
          "Authorization" :`bearer ${JSON.parse(localStorage.getItem("token"))}` // setting token in header 
      
      },
    });
    const jsondata = await data.json(); // converting response to json

    // alert(JSON.stringify(jsondata))
    toast();

    //   localStorage.setItem("user", JSON.stringify(jsondata)); // json to string bcz we can not strore directly json
  };

 
  return (
    <div className="container">
      <h1>Add Product</h1>
      <input
        type="text"
        className="product-data"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter price"
      />
      {error && !name && <span className="error-btn">Enter name please</span>}

      <input
        type="text"
        className="product-data"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="enter product name"
      />
      {error && !price && <span className="error-btn">Enter price please</span>}

      <input
        type="text"
        className="product-data"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="enter category"
      />
      {error && !category && (
        <span className="error-btn">Enter category please</span>
      )}
      {/* <input type="text" className='product-data' value={userId}  onChange={(e) => setId(e.target.value)} placeholder='enter userID' /> */}
      <input
        type="text"
        className="product-data"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="enter company name"
      />
      {error && !company && (
        <span className="error-btn">company name please</span>
      )}
      <button onClick={click}  className="btn-1 mb">
        Add product
      </button>

    </div>
  );
}

export default Addproduct;
