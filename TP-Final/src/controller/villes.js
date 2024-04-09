import { villes } from "../Data/villes.js";
import ville from "../models/ville.js";

 const getvilles = (req, res) => {
    ville.find()
    .then((result) => {
        res.json(result);
});
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

const addVille = (req, res) => {
    const bodyContent = req.body;

    const newVille = new ville(bodyContent);

    newVille.save()
        .then((result) => {
            res.status(201).json(result);
        });
};


export default {
    getvilles,
    getVilleById,
    addVille,
};
