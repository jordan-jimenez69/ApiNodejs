import express from "express";

import carsController from '../controller/cars.js';

  const router = express.Router();


router.get("/", carsController.getCars);
router.get("/:id", carsController.getCarById);
router.post("/", carsController.addCar);
router.delete("/:id", carsController.deleteCarById);
router.put("/:id", carsController.updateCarById);

export default router;