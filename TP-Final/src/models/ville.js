import mongoose from "mongoose";
const { Schema, model } = mongoose;

const villeSchema = new Schema({
    ville: String,
});

export default model("Ville", villeSchema);