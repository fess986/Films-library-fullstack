import { Router } from 'express'

import { ApiRoutes } from '../const/const.js'
import { Review } from '../models/Reviews.js'

const router = Router()

router.get(ApiRoutes.GET_REVIEWS, async (req, res) => {
  // console.log(req)
  // console.log(res)
  try {
    console.log('запрос reviews пришел на бэк')
    const reviews = await Review.find({})
    console.log(reviews)
    // res.status(200).json(reviews)
    res.status(200).json({ message: 'Отзывы загружены' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Что-то пошло не так при загрузке отзывов' })
  }
})

router.post(ApiRoutes.SET_REVIEW, async (req, res) => {
  try {
    const { userId } = req.body
    console.log('userId - ', userId)
    const { filmId } = req.params
    console.log('filmId - ', filmId)
    console.log('запись review пришел на бэк')
    // const reviews = await Review.find({})
    // console.log(reviews)
    // res.status(200).json(reviews)
    res.status(200).json({ message: 'Отзывы отправлен' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Что-то пошло не так при отправке отзыва' })
  }
})

export default router
