const express = require("express");
const router = express.Router();
const {tokenverifying} = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");
const {
	Register,
	loginuser,
	addProduct,
	getAllProduct,
	deleteProduct,
	updateProduct,
	findOneProduct,
	searchOne,
} = require("../controllers/Controllers");

//Register
router.route("/register").post(Register);

// login
router.route("/login").post(loginuser);

// add product
router.route("/product").post(addProduct);

// get all product
router.route("/product").get(getAllProduct);

// delte product route
router.route("/delete/:id").delete( deleteProduct);

// update route
router.route("/update/:id").put(updateProduct);

// found single product rout
router.route("/find/:id").get( findOneProduct);

// router.route("/product").post(searchOne)

// searching route
router.route("/search/:id").get( tokenverifying,searchOne);


// testing  route
router.route("/md").get((req,res)=>{
	res.send("<h2>this is working</h2>")
});

module.exports = router;
