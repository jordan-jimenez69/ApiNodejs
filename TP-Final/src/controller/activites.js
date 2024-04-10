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
        const { villeId, name, adress, description } = req.body;

        // Vérifier si la ville existe
        const ville = await Ville.findById(villeId);
        if (!ville) {
            return res.status(404).json({ message: "Ville non trouvée." });
        }

        const nouvelleActivite = new Activite({
            name,
            adress,
            description,
            ville: ville._id // Associer l'activité à la ville correspondante
        });

        const activite = await nouvelleActivite.save();

        res.status(201).json(activite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

