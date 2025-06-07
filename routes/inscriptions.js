import express from "express";
import * as inscriptionsController from "../controllers/inscriptions.js";

const router = express.Router();

router.post("/", inscriptionsController.postInscription);

export default router;
