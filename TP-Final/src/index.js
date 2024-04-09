import "dotenv/config";
import mongoose from "mongoose"
import express from "express";
import villesRoutes from "./routes/villes.js";
import authRoutes from "./routes/auth.js";
import { handleUncaughtErrors } from "./Middlewares/error.js";
import isAuth from "./Middlewares/auth.js";


const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

//MidleWare
app.use(express.json());

app.use("/villes", isAuth, villesRoutes)
app.use("/auth", authRoutes);


//Routes
app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.use("/error", (req, res) => {
    try {
      //
      throw new Error("This is an error");
    } catch (error) {}
  });
  
  // Middleware pour gerer les erreurs
  app.use(handleUncaughtErrors);


mongoose.connect(MONGO_STRING).then(() => {
    console.log("Connecté");
});

app.listen(PORT, ()=> {
    console.log('running 3001');
})

