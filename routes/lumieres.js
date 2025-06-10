import express from "express";
import { getLumiere, postLumiere } from "../controllers/lumieres.js";

const router = express.Router();

router.get("/", getLumiere);
router.post("/", postLumiere);

export default router;
