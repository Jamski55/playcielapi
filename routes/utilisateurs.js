import express from "express";
import * as utilisateursController from "../controllers/utilisateurs.js";

const router = express.Router();

router.get("/", utilisateursController.getUtilisateurByBadgeUid);

export default router;
