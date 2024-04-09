import "dotenv/config";
import mongoose from "mongoose"
import express from "express";
import villesRoutes from "./routes/villes.js";


const app = express();

console.log("env: ", process.env.MONGO_STRING);

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

//MidleWare
app.use(express.json());
app.use("/villes", villesRoutes)


//Routes
app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

mongoose.connect(MONGO_STRING).then(() => {
    console.log("Connecté");
});

app.listen(PORT, ()=> {
    console.log('running 3001');
})

