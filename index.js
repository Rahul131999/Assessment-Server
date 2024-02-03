import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import customerRouter from "./routes/customer.route.js";
import transactionRouter from "./routes/transaction.route.js"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB sorted!!");
  })
  .catch((err) => {
    console.log(err);
  });

const App = express();

App.use(express.json());

App.use(cors({ origin: "http://localhost:5173", credentials: true }));

App.use("/api/auth", authRouter);
App.use("/api/customers", customerRouter);
App.use("/api/transactions", transactionRouter);

App.listen(process.env.PORT, () => {
  console.log("server is up");
});
