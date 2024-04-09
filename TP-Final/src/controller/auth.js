import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";


export const signup = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password, name, phoneNumber } = req.body;
        // On va hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            email,
            password: hashedPassword,
            name,
            phoneNumber,
        });
        // sauvegarde utilisateur
        const doc = await newUser.save();
        // si tout s'est bien passé, on renvoie un status 201
        res.status(201).json(doc);
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            //  l'utilisateur n'existe pas
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        // si l'utilisateur existe, on compare les mots de passe
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            // Si le mot de passe est invalide, on renvoie une erreur
            return res.status(401).json({ message: "Mot de passe incorrect." });
        }
        // genere un token
        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};