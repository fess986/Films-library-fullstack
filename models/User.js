import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String, // тип - строка
    required: true, // обязательное поле
    unique: true, // уникальное поле
  },
  password: {
    type: String,
    required: true,
  },
  favoriteFilms: [
    {
      type: Types.ObjectId, // тип - идентификатор
      ref: 'Films', // привязываемся к модели Films
    },
  ],
  reviews: [
    {
      type: Types.ObjectId, // тип - идентификатор
      ref: 'Review', // привязываемся к модели Review
    },
  ],
})

export const User = model('User', userSchema)
