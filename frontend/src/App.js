import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import Addproduct from "./components/Addproduct";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route   element={<PrivateComponent/>}>

        <Route path="/" element={<Products/>} />

        <Route path="/add" element={<Addproduct/>} />

        <Route path="/update/:id" element={<UpdateProduct/>} />
        { // if we want to pass something in url we can pass like this <<} }
        }

        <Route path="/logout" element={<h2>hey this is login</h2>} />

        <Route path="/profile" element={<h2>hey this profile</h2>} />
        </Route>
    
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
