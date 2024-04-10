import Activite from "../models/activite.js";
import { validationResult } from "express-validator";


const getActiviteByVille = async (req, res) => {
    try {
        const villeId = req.params.villeId;

        const activites = await Activite.find({ ville: villeId });

        res.json(activites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 const getActiviteByVilleById = (req, res) => {
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
};

const addActiviteByVille = (req, res) => {
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

const updateActiviteByVilleById = (req, res) => {
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

const deleteActiviteByVilleById = (req, res) => {
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
    getActiviteByVille,
    getActiviteByVilleById,
    addActiviteByVille,
    updateActiviteByVilleById,
    deleteActiviteByVilleById,
    getError
};