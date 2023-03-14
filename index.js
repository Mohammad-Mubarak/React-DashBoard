require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const jwt = require("jsonwebtoken");
const secretKey = "thisismykey";


// connection here done
require("./connection/connect");

//middleware
app.use(express.json());
app.use(cors());

// routes
const route = require("./routes/Allroutes");

app.use("/", route);

const User = require("./models/Users"); // modle
const product = require("./models/products");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
