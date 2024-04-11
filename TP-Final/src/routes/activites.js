import express from "express";
import { getActiviteByVille, addActivityToVille } from '../controller/activites.js';

const router = express.Router();


router.get("/villes/:villeId", getActiviteByVille);

router.post("/villes/:villeId", addActivityToVille);


export default router;