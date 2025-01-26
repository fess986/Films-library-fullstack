import { Router } from 'express'

import { ApiRoutes } from '../const/const.js'
import { Review } from '../models/Reviews.js'
import { User } from '../models/User.js'
import { Film } from '../models/Films.js'

const router = Router()

router.get(ApiRoutes.GET_REVIEWS, async (req, res) => {
  try {
    const reviews = await Review.find({})
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
    const { filmId } = req.params

    const user = await User.findById(review.userId)
    const film = await Film.findById(filmId)

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

      film.reviews.push(reviewId)
      await film.save()

      // Получение всех отзывов для фильма
      const reviews = await Review.find({ filmId }).lean()
      // console.log(reviews)

      // Приведение к формату Review[]
      const formattedReviews = reviews.map((r) => ({
        id: r._id.toString(),
        userId: r.userId.toString(),
        userName: r.userName,
        filmId: r.filmId.toString(),
        rating: r.rating,
        commentText: r.commentText,
        date: r.date,
      }))

      // Отправляем отзывы на фронт
      return res.status(200).json(formattedReviews)
    } else {
      return res.status(404).json({
        message: 'Фильм или пользователь не найден',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Что-то пошло не так при отправке отзыва' })
  }
})

export default router
