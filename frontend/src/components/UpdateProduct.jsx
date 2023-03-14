import React from "react";
import "./Signup.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import url from './api'

function UpdateProduct() {
  const navigate = useNavigate();
  const para = useParams();

  const [product, setProduct] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState(0);
  useEffect(() => {
    dataFetching();
  }, []);

  const dataFetching = async (id) => {
    let data = await fetch(`${url}/find/${para.id}`,{
      "headers":{
        Authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` // setting token in header 
      }
    });

    data = await data.json();
    setName(data.name);
    setPrice(data.price);
    setCompany(data.company);
    setCategory(data.category);
    setId(data.id)
  };

  const click = async () => {
    console.log("clicked one time bro");
     var data = await fetch(`${url}/update/${para.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        
          "Authorization" :`bearer ${JSON.parse(localStorage.getItem("token"))}` // setting token in header 
      
      },
    });

    data = await data.json();
    navigate("/")
  };



  return (
    <div className="container" key={id}>
      <h1>Update your Product</h1>
      <input
        type="text"
        className="product-data"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />

      <input
        type="text"
        className="product-data"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="enter product price"
      />

      <input
        type="text"
        className="product-data"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="enter category"
      />

      <input
        type="text"
        className="product-data"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="enter company name"
      />
      <button onClick={click} className="btn-1 mb">
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;
