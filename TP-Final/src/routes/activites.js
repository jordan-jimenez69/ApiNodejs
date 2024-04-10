import express from "express";
import activitesController from "../controller/activites.js"
import { body } from "express-validator";
const router = express.Router();


router.get("/villes/:villeId/activites", activitesController, getActiviteByVille);



export default router;