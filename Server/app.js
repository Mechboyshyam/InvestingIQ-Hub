import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import morgan from "morgan";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello,world!",
  });
});


export default app;