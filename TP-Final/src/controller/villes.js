import { villes } from "../Data/villes.js";

 const getvilles = (req, res) => {
    res.json(villes);
};

 const getVilleById = (req, res) => {
    const id = parseInt(req.params.id);
    const ville = villes.find(ville => ville.id === id);
    if (ville) {
        res.json(ville);
    } else {
        res.status(404).json({ message: "Ville non trouvée" });
    }
};


export default {
    getvilles,
    getVilleById,
};
