import express from "express";
import villesController from "../controller/villes.js"
const router = express.Router();


router.get("/", villesController.getvilles);
router.get("/:id", villesController.getVilleById);

export default router;