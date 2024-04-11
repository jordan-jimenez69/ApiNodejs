import Activite from "../models/activite.js";

export const getActiviteByVille = async (req, res) => {
    try {
        
        const villeId = req.params.villeId;

        const activites = await Activite.find({ ville: villeId });

        res.json(activites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getActiviteById = async (req, res) => {
    try {
        const activiteId = req.params.activiteId;

        const activite = await Activite.findById(activiteId);
        
        if (!activite) {
            return res.status(404).json({ message: "Activité non trouvée" });
        }
        
        res.json(activite);
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

export const updateActiviteById = async (req, res) => {
    try {
        const activiteId = req.params.activiteId;
        const { name, adress, description } = req.body; 
        
        const activiteModifiee = await Activite.findByIdAndUpdate(activiteId, {
            name,
            adress,
            description
        }, { new: true }); 
        
        if (!activiteModifiee) {
            return res.status(404).json({ message: "Activité non trouvée" });
        }
        
        res.json(activiteModifiee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteActiviteById = async (req, res) => {
    try {
        const activiteId = req.params.activiteId;

        const activiteSupprimee = await Activite.findByIdAndDelete(activiteId);
        
        if (!activiteSupprimee) {
            return res.status(404).json({ message: "Activité non trouvée" });
        }
        
        res.json({ message: "Activité supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};