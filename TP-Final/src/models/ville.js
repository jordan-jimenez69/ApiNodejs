import mongoose from "mongoose";
const { Schema, model } = mongoose;

const villeSchema = new Schema({
    ville: String,
    first: String,
    second: String,
    third: String,
    fourth: String,
    fifth: String,
});

export default model("Ville", villeSchema);