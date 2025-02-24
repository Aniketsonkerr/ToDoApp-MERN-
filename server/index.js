import { app } from "./app.js";
import connectionDb from "./db/connectionDb.js";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

connectionDb();
