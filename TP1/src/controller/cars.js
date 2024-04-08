import { mockCars } from "../Data/mock.js";

 const getCars = (req, res) => {
    res.json(mockCars);
};

 const getCarById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const car = mockCars.find(car => car.id === id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
};

 const addCar = (req, res) => {
    const bodyContent = req.body;
    const id = mockCars.length + 1;
    const newCar = { id, ...bodyContent };
    mockCars.push(newCar);
    res.status(201).json(newCar);
};

 const deleteCarById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const carIndex = mockCars.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        const deletedCar = mockCars.splice(carIndex, 1)[0];
        res.json({ message: "Voiture supprimée avec succès", deletedCar });
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
};

 const updateCarById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const carIndex = mockCars.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        const updatedCar = { ...mockCars[carIndex], ...req.body };
        mockCars[carIndex] = updatedCar;
        res.json(updatedCar);
    } else {
        res.status(404).json({ message: "Voiture non trouvée" });
    }
};

export default {
    getCars,
    getCarById,
    addCar,
    deleteCarById,
    updateCarById
};
