const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const jwt = require("jsonwebtoken");
const secretKey = "thisismykey";

// imorting modles
const User = require("../models/Users");
const product = require("../models/products");

// user Registration
exports.Register = async (req, res) => {
	try {
		const saveuser = new User(req.body);
		const result = await saveuser.save();

		result.password = undefined; // to hide password

		// token generation
		jwt.sign(
			{ result },
			secretKey,
			{
				expiresIn: "2h",
			},
			(err, token) => {
				if (err) {
					res.send("no data found");
				}

				res.send({ result, token });
			}
		);
	} catch (error) {
		console.log(error);
	}
};

// login with jwt token

exports.loginuser = async (req, res) => {
	try {
		if (req.body.email && req.body.password) {
			let userval = await User.findOne(req.body).select("-password");

         
			if (userval) {
				// token genration here
				jwt.sign(
					{ userval },
					secretKey,
					{ expiresIn: "2h" },
					(err, token) => {
						if (err) {
							res.send("no data found");
						} else {
							res.send({ userval, token });
						}
					}
				);
			} else {
				res.send("no data found");
			}
		} else {
			res.send("no data found");
		}
	} catch (error) {
		console.log(error);
	}
};

// product adding
exports.addProduct = async (req, res) => {
	const createdproduct = new product(req.body);
	const productsave = await createdproduct.save();
	res.send(productsave);
};

// fetching all products
exports.getAllProduct = async (req, res) => {
	try {
		let allproduct = await product.find();

		if (allproduct.length > 0) {
			res.send(allproduct);
		} else {
			res.send({
				result: "no data found",
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// delete product
exports.deleteProduct = async (req, res) => {
	try {
		const delted = await product.deleteOne({
			_id: req.params.id,
		});
		res.send(delted);
	} catch (error) {
		console.log(error);
	}
};

// update product
exports.updateProduct = async (req, res) => {
	try {
		let result = await product.updateOne(
			{ _id: req.params.id },
			{
				$set: req.body,
			}
		);

		res.send(result);
	} catch (error) {
		console.log(error);
	}
};

// findone prodcut
exports.findOneProduct = async (req, res) => {
	try {
		const result = await product.findOne({
			_id: req.params.id,
		});

		if (result) {
			res.send(result);
		} else {
			res.send({
				message: "no record found",
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// searching feature
exports.searchOne = async (req, res) => {
	try {
		const result = await product.find({
			$or: [
				{ name: { $regex: req.params.id } },
				{ company: { $regex: req.params.id } },
				{ category: { $regex: req.params.id } },
			],
		});

		res.send(result);
	} catch (error) {
		console.log(error);
	}
};
