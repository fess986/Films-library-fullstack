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
})

export const User = model('User', userSchema)
