import express from "express";
import { getActiviteByVille, addActivityToVille, updateActiviteById, deleteActiviteById, getActiviteById } from '../controller/activites.js';

const router = express.Router();


router.get("/villes/:villeId", getActiviteByVille);

router.post("/villes/:villeId", addActivityToVille);

router.put("/villes/:villeId/:activiteId", updateActiviteById);

router.delete("/villes/:villeId/:activiteId", deleteActiviteById);

router.get("/villes/:villeId/:activiteId", getActiviteById);



export default router;