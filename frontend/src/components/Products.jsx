import React from "react";
import { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import url from "./api"
function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    let data = await fetch(`${url}/product`,{
      headers:{
        Authorization :`bearer ${JSON.parse(localStorage.getItem("token"))}` // setting token in header 
      }
     } );
    let val = await data.json();
    setProduct(val);
    setLoading(false);
  };




  const deletePro = async (id) => {
    const del = await fetch(`${url}/delete/${id}`, {
      method: "Delete",
    });

    const result = await del.json();
    if (result) {
      getproduct();
    }
  };

  //searching feature
  // const search = async (event) => {
  //   const val = event.target.value;
  // console.log(val);
  //   if (val) {
  //     var data = await fetch(`${url}/search/${val}`
  //     );
  //     data = await data.json();
  //     setProduct(data);
  //   } else {
  //     getproduct();
  //   }
  // };












  const search = async (event) => {
    const val = event.target.value;
    console.log(val);
    if (val) {
      try {
        const response = await fetch(`${url}/search/${val}`, {
          headers: {
            Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`, // set the Authorization header with your JWT token
          },
        });
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        // handle any errors that occur when parsing the JSON response
      }
    } else {
      getproduct();
    }
  };
  // In the example code above, we are using a try-catch block to handle any errors that occur when parsing the JSON response. If an error occurs, we log it to the console and handle it as necessary. Note that we are also setting the Authorization header with our JWT token in the fetch request. This assumes that you have already obtained a valid JWT token and stored it in a variable called token.
  
  
  
  
  
  

















  return (
    <div className="pro">
      {loading ? (
        <h1>Product loading </h1>
      ) : (
        <>
          <h1>All Products</h1>
          <input
            type="text"
            className="srch"
            placeholder="search product"
            onChange={search}
          />

          <table>
            <tbody>
              <tr>
                <th rowSpan="2">
                  <strong>S no </strong>
                </th>
                <th rowSpan="2">
                  <strong>Name</strong>
                </th>
                <th rowSpan="2">
                  <strong>Price </strong>
                </th>
                <th rowSpan="2">
                  <strong>Category</strong>
                </th>
                <th rowSpan="2">
                  <strong>Company</strong>
                </th>
                <th rowSpan="2">
                  <strong>Delete</strong>
                </th>
                <th rowSpan="2">
                  <strong>update</strong>
                </th>
              </tr>
              <br></br>
              {product.length > 0 ? (
                product.map((e, index) => {
                  return (
                    <>
                      <tr key={e._id}>
                        <td>{index + 1}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.category}</td>
                        <td>{e.company}</td>
                        <td>
                          {" "}
                          <button
                            onClick={() => deletePro(e._id)}
                            className="buttonClass "
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          {" "}
                          <Link to={`/update/${e._id}`}>
                            {" "}
                            <button className="buttonClass2 ">update</button>
                          </Link>
                        </td>
                      </tr>
                      <br></br>
                    </>
                  );
                })
              ) : (  
                <>
              
                <tr >
                        <td>"Sorry..</td>
                        <td>Data</td>
                        <td>Not</td>
                        <td>Found</td>
                        <td>Check</td>
                        <td>
                          for 
                        </td>
                      
                        <td>
                          more
                        </td>
                </tr>
                </>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Products;


