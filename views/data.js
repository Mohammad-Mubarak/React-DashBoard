app.post("/register", async (req, res) => {
	try {
		const saveuser = new User(req.body);
		const result = await saveuser.save();

		console.log(result);
		res.send(result);
	} catch (error) {
		console.log(error);
	}
});

app.post("/login", async (req, res) => {
	try {
		if (req.body.email && req.body.password) {
			let userval = await User.findOne(req.body).select("-password");

			if (userval) {
				const token = jwt.sign(
					userval,
					secretKey,
					{
						expiresIn: "2h",
					},
					(err, token) => {
						if (err) {
							res.send("error found");
						}
						res.send({ userval, auth: token });
					}
				);
			} else {
				res.send("no data found");
			}
		} else {
			res.send("data missing");
		}
	} catch (error) {
		console.log(error);
	}
});

app.post("/product", async (req, res) => {
	const createdproduct = new product(req.body);
	const productsave = await createdproduct.save();
	res.send(productsave);
});

app.get("/product", async (req, res) => {
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
});

app.delete("/delete/:id", async (req, res) => {
	try {
		const delted = await product.deleteOne({
			_id: req.params.id,
		});
		console.log(req.params.id);
		res.send(delted);
	} catch (error) {
		console.log(error);
	}
});

app.put("/update/:id", async (req, res) => {
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
});

app.get("/find/:id", async (req, res) => {
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
});

app.get("/search/:id", async (req, res) => {
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
});
