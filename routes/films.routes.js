import { Router } from 'express'
import isAuth from '../middlewares/isauth.middleware.js'

// import { Films } from "../models/Films";
import { ApiRoutes } from '../const/const.js'

const router = Router()

router.get(ApiRoutes.GET_FILMS, isAuth, async (req, res) => {
  try {
    console.log('стучимся в ApiRoutes.GET_FILMS')
    console.log(req.user)
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
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Что-то пошло не так при загрузке фильмов на сервер',
    })
  }
})

export default router
