import express from "express";
import { getActiveCustomers } from "../controllers/customer.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/active", verifyToken ,getActiveCustomers)

export default router;