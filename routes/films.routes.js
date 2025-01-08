import { Router } from 'express'
import { Films } from '../const/films.js'
import { Film } from '../models/Films.js'
import isAuth from '../middlewares/isauth.middleware.js'

// import { Films } from "../models/Films";
import { ApiRoutes } from '../const/const.js'

const router = Router()

router.get(ApiRoutes.GET_FILMS, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.GET_FILMS')

    const films = await Film.find({}, { similarMockFilms: 0 }).lean() // находим все фильмы, кроме similarMockFilms, и преобразуем в массив с объектами

    // преобразуем данные с базы данных к нужному формату
    const result = films.map((film) => ({
      id: film._id.toString(), // Преобразуем _id из ObjectId в строку
      name: film.name,
      posterImage: film.posterImage,
      previewImage: film.previewImage,
      videoLink: film.videoLink,
      previewVideoLink: film.previewVideoLink,
      description: film.description,
      rating: film.rating,
      scoresCount: film.scoresCount,
      director: film.director,
      starring: film.starring,
      runTime: film.runTime,
      genre: film.genre,
      released: film.released,
      isFavorite: film.isFavorite,
      playerImage: film.playerImage || null,
      similarFilms: film.similarFilms.map((id) => id.toString()), // Преобразуем ObjectId в строку
      likedByUsers: film.likedByUsers.map((id) => id.toString()), // Преобразуем ObjectId в строку
    }))

    // console.log('result - ', result)
    // res.status(200).json({ message: 'Фильмы получены' })

    res.status(200).json(result) // передаём данные на клиента
  } catch (error) {
    res.status(500).json({
      message: 'Что-то пошло не так при получении фильмов с сервера',
    })
  }
})

router.post(ApiRoutes.SET_FILMS, isAuth, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.SET_FILMS')
    // console.log('req user - ', req.user)  // данные пользователя
    console.log(Films)

    // for (const filmData of Films) {
    //   const film = new Film(filmData);
    //   await film.save();
    // }

    // Добавляем фильмы в базу данных
    const savedFilms = await Film.insertMany(Films)

    // Создаем мапу { name: _id }, чтобы найти фильм по имени
    const filmIdMap = savedFilms.reduce((map, film) => {
      map[film.name] = film._id
      return map
    }, {})

    console.log('filmIdMap - ', filmIdMap)

    // Обновляем поле similarFilms на основе similarMockFilms
    for (const film of savedFilms) {
      const similarFilmIds = film.similarMockFilms
        .map((name) => filmIdMap[name]) // Находим _id по имени
        .filter((id) => id) // Фильтруем, чтобы убрать undefined (если фильм не найден)

      film.similarFilms = similarFilmIds // Устанавливаем реальные _id
      await film.save() // Сохраняем изменения
    }

    res.status(200).json({ message: 'Фильмы загружены' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Что-то пошло не так при загрузке фильмов на сервер',
    })
  }
})

export default router
