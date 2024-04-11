import Activite from "../models/activite.js";
import Ville from "../models/ville.js";

export const getActiviteByVille = async (req, res) => {
    try {
        
        const villeId = req.params.villeId;

        const activites = await Activite.find({ ville: villeId });

        res.json(activites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addActivityToVille = async (req, res) => {
    try {
        const villeId = req.params.villeId;
        const { name, adress, description } = req.body; 
        
        const nouvelleActivite = new Activite({
            name,
            adress,
            description,
            ville: villeId 
        });

        const activiteAjoutee = await nouvelleActivite.save();

        res.status(201).json(activiteAjoutee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

