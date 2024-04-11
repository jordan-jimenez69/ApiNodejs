import mongoose from "mongoose";
const { Schema, model } = mongoose;

const activiteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ville: {
    type: Schema.Types.ObjectId,
    ref: 'Ville',
    required: true,
  },
});

export default model("Activite", activiteSchema);