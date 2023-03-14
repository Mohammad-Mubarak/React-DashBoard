const jwt = require("jsonwebtoken");

exports.tokenverifying = (req, res, next) => {
	const token = req.res["Authorization"];
	if (token) {
		jwt.verify(token, secretkey, (err, valid) => {
			if (err) {
				res.status(201).send("please provide token");
			} else {
				next();
			}
		});
	} else {
		res.status(401).send("please provide token");
	}
};
