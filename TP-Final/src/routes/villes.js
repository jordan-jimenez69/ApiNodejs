import express from "express";
import villesController from "../controller/villes.js"
import { body } from "express-validator";
const router = express.Router();

router.get("/", villesController.getvilles);
router.get("/:id", villesController.getVilleById);
router.post("/", 
[
    body ("ville").trim().isLength({ max: 20, min: 2 }),
    body("first").trim().isLength({ max: 50, min: 2 }),
    body("second").trim().isLength({ max: 50, min: 2 }),
    body("third").trim().isLength({ max: 50, min: 2 }),
    body("fourth").trim().isLength({ max: 50, min: 2 }),
    body("fifth").trim().isLength({ max: 50, min: 2 })
]
, villesController.addVille);
router.put("/:id", villesController.updateVilleById);
router.delete("/:id", villesController.deleteVilleById);

export default router;