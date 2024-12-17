import { Schema, model } from "mongoose";

const filmsSchema = new Schema({
  id: {
    type: Number,  
    required: true,  // обязательное поле
    unique: true,  // уникальное поле
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Films = model("Films", filmsSchema);