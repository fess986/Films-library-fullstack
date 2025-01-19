import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  filmId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

export const Review = model('Review', reviewSchema)
