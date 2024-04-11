import villesRoutes from "./villes.js";
import activitesRoutes from "./activites.js";
import authRoutes from "./auth.js";
import isAuth from "../Middlewares/auth.js";
import { Router } from "express";


const router = Router();


router.use("/villes", isAuth, villesRoutes)
router.use("/villes/:villeId/activites", isAuth, activitesRoutes)
router.use("/auth", authRoutes);


export default router;