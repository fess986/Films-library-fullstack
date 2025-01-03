import { Router } from 'express'
import { Films } from '../const/films.js'
import { Film } from '../models/Films.js'
import isAuth from '../middlewares/isauth.middleware.js'

// import { Films } from "../models/Films";
import { ApiRoutes } from '../const/const.js'

const router = Router()

router.get(ApiRoutes.GET_FILMS, isAuth, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.GET_FILMS')
    // console.log(req.user)
    console.log('req user - ', req.user)
    res.status(200).json({ message: 'Фильмы получены' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Что-то пошло не так при получении фильмов с сервера',
    })
    // console.log(error);
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
  const savedFilms = await Film.insertMany(Films);

  // Создаем мапу { name: _id }, чтобы найти фильм по имени
  const filmIdMap = savedFilms.reduce((map, film) => {
    map[film.name] = film._id;
    return map;
  }, {});

  console.log('filmIdMap - ', filmIdMap)

  // Обновляем поле similarFilms на основе similarMockFilms
  for (const film of savedFilms) {
    const similarFilmIds = film.similarMockFilms
      .map((name) => filmIdMap[name]) // Находим _id по имени
      .filter((id) => id); // Фильтруем, чтобы убрать undefined (если фильм не найден)

    film.similarFilms = similarFilmIds; // Устанавливаем реальные _id
    await film.save(); // Сохраняем изменения
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
