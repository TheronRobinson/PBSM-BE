const express = require("express");
const pbsm = express();
const port = 3000;

pbsm.get("/", (req, res) => {
	res.end("Hello World!");
});

pbsm.listen(port, () => {
	console.log("PBSM is listening to the FE");
});
