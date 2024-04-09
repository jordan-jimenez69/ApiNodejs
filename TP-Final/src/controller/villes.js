import { request } from "express";
import ville from "../models/ville.js";
import { validationResult } from "express-validator";

 const getvilles = (req, res) => {
    ville.find()
    .then((result) => {
        res.json(result);
});
};

 const getVilleById = (req, res) => {
    const id = req.params.id;
    ville.findById(id)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

const getError = (req, res) => {
    throw new Error("This is an error");
}

const addVille = (req, res) => {
    const bodyContent = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    else {

    const newVille = new ville(bodyContent);

    newVille.save()
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            console.log(error);
            throw new Error(error);
          });
}};

const updateVilleById = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    ville.findByIdAndUpdate(id, updateData, { new: true })
        .then((updatedVille) => {
            if (!updatedVille) {
                return res.status(404).json({ message: "Ville introuvable" });
            }
            res.status(200).json(updatedVille);
        });
};

const deleteVilleById = (req, res) => {
    const id = req.params.id;
    
    ville.findByIdAndDelete(id)
        .then((deleteVille) => {
            if (!deleteVille) {
                return res.status(404).json({ message: "Ville introuvable" });
            }
            res.status(200).json(deleteVille);
        });
};


export default {
    getvilles,
    getVilleById,
    addVille,
    updateVilleById,
    deleteVilleById,
    getError
};
