import express from "express";

const router = express.Router();

const mockCars = [
    { id: 1, brand: "Audi", model: "A3" },
    { id: 2, brand: "Renault", model: "Clio" },
    { id: 3, brand: "Peugeot", model: "208" },
    { id: 4, brand: "BMW", model: "Serie 1" },
    { id: 5, brand: "Mercedes", model: "Classe A" },
    { id: 6, brand: "Citroen", model: "C3" },
    { id: 7, brand: "Ford", model: "Fiesta" },
    { id: 8, brand: "Opel", model: "Corsa" },
    { id: 9, brand: "Toyota", model: "Yaris" },
    { id: 10, brand: "Volkswagen", model: "Polo" },
  ];

  router.get("/", (req, res) => {
    res.json(mockCars);
});

  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const car = mockCars.find(car => car.id === id);
    if (car) {
        res.json(car); 
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

router.post("/", (req, res) => {
    const bodyContent = req.body;
    const id = mockCars.length + 1;
    const newCar = { id, ...bodyContent};
    mockCars.push(newCar);
    res.status(201).json(newCar);
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = mockCars.findIndex(car => car.id === id);
    if (index !== -1) {
        mockCars.splice(index, 1);
        res.json({ message: "Voiture supprimée avec succès" });
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = mockCars.findIndex(car => car.id === id);
    if (index !== -1) {
        const updatedCar = { ...mockCars[index], ...req.body };
        mockCars[index] = updatedCar;
        res.json(updatedCar);
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
});

export default router;