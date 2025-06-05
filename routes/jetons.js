import express from "express";
import { getJeton, postJeton } from "../controllers/jetons.js";

const router = express.Router();

router.get("/", getJeton);
router.post("/", postJeton);

export default router;
