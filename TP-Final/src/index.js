import "dotenv/config";
import mongoose from "mongoose"
import { CreateApp } from "./app.js";


const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;


const app = CreateApp();


mongoose.connect(MONGO_STRING).then(() => {
    console.log("Connecté");
});

app.listen(PORT, ()=> {
    console.log('running 3001');
})

