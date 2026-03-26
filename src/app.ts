import express from "express";
import { errorMiddleware } from "./middlewares/error-middleware";
import { pool } from "./db";
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 3001;
const db = pool;
const error = errorMiddleware();
app.get("/", async (req, res) => {
  console.log(await db.query("SELECT NOW()"));
  res.send("Hello ");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
  req?.next?.();
});

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
("");
