import express from "express";
import { getBadge, postBadge } from "../controllers/badges.js";

const router = express.Router();

router.get("/", getBadge);
router.post("/", postBadge);

export default router;
