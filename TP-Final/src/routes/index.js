import { Router } from "express";

import villesRoutes from "./villes.js";
import activitesRoutes from "./activites.js";
import authRoutes from "./auth.js";
import isAuth from "../Middlewares/auth.js";
import fileRouter from "./file.js";


const router = Router();


router.use("/villes", isAuth, villesRoutes)
router.use("/villes/:villeId/activites", isAuth, activitesRoutes)
router.use("/auth", authRoutes);

router.use("/uploads", fileRouter);



export default router;