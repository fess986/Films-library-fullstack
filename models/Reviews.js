import { Schema, model, Types } from 'mongoose'

const reviewSchema = new Schema({
  userId: {
      type: Types.ObjectId,
      ref: 'User', // Связь с таблицей пользователей
  },
  userName: {
    type: String,
    required: true,
  },
  filmId: {
    type: Types.ObjectId, // тип - идентификатор
    ref: 'Films', // привязываемся к модели Films
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
