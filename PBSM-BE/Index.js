require("dotenv").config();
const express = require("express");
const pbsm = express();
const port = process.env.PORT;

pbsm.get("/", (req, res) => {
	res.send("Hello World!");
});

pbsm.listen(port, () => {
	console.log("PBSM is listening to the FE");
});
