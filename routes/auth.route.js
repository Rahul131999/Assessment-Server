import express from "express";
import { googleAuth } from "../controllers/auth.contoller.js";

const router = express.Router();

router.post("/google-auth", googleAuth)

export default router;