import express from "express";

const router = express.Router();

import carsController from '../controller/cars.js';


router.get("/", carsController.getCars);
router.get("/:id", carsController.getCarById);
router.post("/", carsController.addCar);
router.delete("/:id", carsController.deleteCarById);
router.put("/:id", carsController.updateCarById);

export default router;