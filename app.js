import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { ApiRoutes } from './const/const.js'
import { corsOptions } from './middlewares/corsConfig.middleware.js'

// так как в ES6 модулях нет доступа к __dirname, мы можем его получить через fileURLToPath
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = config.get('PORT') || 4000
console.log(config.get('ENV'))

// Настройка CORS через настроенный в отдельном файле объект
// теперь при запуске в дев-режиме будет обращение к порту локала 5173, для билда - 4173, а для прода - адрес домена
app.use(cors(corsOptions))

app.use(express.json({ extended: true }))

// app.use('/api/link', require('./routes/link.routes')) так можно импортировать только когда работаем не с ES5
app.use(ApiRoutes.AUTH, (await import('./routes/auth.routes.js')).default) // динамический импорт роутов пользователей
app.use(ApiRoutes.FILMS, (await import('./routes/films.routes.js')).default) // роуты фильмов
app.use(ApiRoutes.REVIEWS, (await import('./routes/reviews.routes.js')).default)

// в случае если приложение запускается в продакшен режиме, то будет обращение к папке frontend/dist, где будет лежать фронтэнд проекта
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'frontend', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
}

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {})

    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (e) {
    console.log(e.message)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}

start()
