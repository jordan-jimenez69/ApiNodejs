import express from "express";
import { signin, signup } from "../controller/auth.js";
import { body } from "express-validator";


const router = express.Router();


router.post("/signup", [
    body("email").isEmail().withMessage("L'email n'est pas valide"),
    body("password").isLength({ min: 6 }).withMessage("Le mot de passe doit comporter au moins 6 caractères"),
    body("name").isLength({ min: 2 }).withMessage("Le nom doit comporter au moins 2 caractères"),
    body("phoneNumber").isLength({ min: 10, max: 10 }).withMessage("Le numéro de téléphone doit comporter exactement 10 chiffres"),
], signup);

router.post("/signin", [
    body("email").isEmail().withMessage("L'email n'est pas valide"),
    body("password").isLength({ min: 6 }).withMessage("Le mot de passe doit comporter au moins 6 caractères"),
], signin);


export default router;