import mongoose from "mongoose";
const { Schema, model } = mongoose;

const activiteSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

export default model("Activite", activiteSchema);