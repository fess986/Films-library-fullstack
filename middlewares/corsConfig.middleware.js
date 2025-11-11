import cors from 'cors'
import config from 'config'

const allowedOrigins = config.get('cors.allowedOrigins')
console.log(allowedOrigins)

export const corsOptions = {
  origin: (origin, callback) => {
    // console.log('Incoming Origin:', origin)  // для отладки входящих запросов

    if (!origin) return callback(null, true) // разрешить запросы без origin (например, Postman)
    if (allowedOrigins.includes(origin)) {
      // если же есть в списке, то продолжаем
      return callback(null, true)      
    }
    return callback(new Error('Not allowed by CORS from server'))
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // допустимые методы
  allowedHeaders: ['Content-Type', 'Authorization'], // заголовки, которые мы хотим поддерживать
  credentials: true,
}
