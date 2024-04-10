import express from "express";
import villesController from "../controller/villes.js"
import { body } from "express-validator";
const router = express.Router();

router.get("/", villesController.getvilles);
router.get("/:id", villesController.getVilleById);
router.get("/", villesController.getError);
router.post("/", 
[
    body ("ville").trim().isLength({ max: 20, min: 2 }),
]
, villesController.addVille);
router.put("/:id", villesController.updateVilleById);
router.delete("/:id", villesController.deleteVilleById);

export default router;