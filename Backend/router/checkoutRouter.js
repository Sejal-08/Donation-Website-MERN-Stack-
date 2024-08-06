import express from "express";
import { checkout } from "../Controllers/checkout.js";

const router = express.Router();

router.post("/checkout", checkout);

export default router;