import { Router } from 'express'

import { ApiRoutes } from '../const/const.js'
import { Review } from '../models/Reviews.js'
import { User } from '../models/User.js'
import { Film } from '../models/Films.js'

const router = Router()

router.get(ApiRoutes.GET_REVIEWS, async (req, res) => {
  // console.log(req)
  // console.log(res)
  try {
    console.log('запрос reviews пришел на бэк')
    const reviews = await Review.find({})
    // console.log(reviews)
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
    const { review } = req.body
    console.log('review - ', review)
    const { filmId } = req.params
    console.log('filmId - ', filmId)

    const user = await User.findById(review.userId)
    console.log('user - ', user)
    const film = await Film.findById(filmId)
    console.log('film - ', film)

    if (user && film) {
      const newReview = new Review({
        userId: review.userId,
        userName: user.email,
        filmId,
        rating: review.rating,
        commentText: review.text,
        date: review.date,
      })
      await newReview.save()

      const reviewId = newReview._id.toString()

      user.reviews.push(reviewId)
      await user.save()

    } else {
      return res.status(404).json({
        message: 'Фильм или пользователь не найден',
      })
    }

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
