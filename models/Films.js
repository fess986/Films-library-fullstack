import { Schema, model, Types } from 'mongoose'

const filmSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  posterImage: {
    type: String,
    required: true,
  },
  previewImage: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: false,
  },
  tmdbId: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  scoresCount: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  starring: {
    type: [String],
    required: true,
  },
  runTime: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  similarFilms: {
    type: [Types.ObjectId],
    ref: 'Film',
  },
  similarMockFilms: {
    type: [String],
  },
  released: {
    type: Number,
    required: true,
  },
  likedByUsers: [
    {
      type: Types.ObjectId,
      ref: 'User', // Связь с таблицей пользователей
    },
  ],
  reviews: [
    {
      type: Types.ObjectId, // тип - идентификатор
      ref: 'Review', // привязываемся к модели Review
    },
  ],
})

export const Film = model('Film', filmSchema)
