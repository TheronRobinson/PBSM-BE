import { Express } from "express";

const pbsm = express();

pbsm.listen(3000, () =>
	console.log("PBSM BE is active & listening to the FE ")
);
