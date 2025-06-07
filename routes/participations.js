import express from "express";
import * as participationsController from "../controllers/participations.js";

const router = express.Router();

router.post("/", participationsController.postParticipation);

export default router;
