import express from "express";
import { getLevier, postLevier } from "../controllers/leviers.js";

const router = express.Router();

router.get("/", getLevier);
router.post("/", postLevier);

export default router;
