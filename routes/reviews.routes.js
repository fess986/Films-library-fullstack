import { Router } from 'express'

import { ApiRoutes } from '../const/const.js'
import { Review } from '../models/Reviews.js'
import { User } from '../models/User.js'
import { Film } from '../models/Films.js'
import isAuth from '../middlewares/isauth.middleware.js'

const router = Router()

router.get(ApiRoutes.GET_REVIEWS, async (req, res) => {
  try {
    const { filmId } = req.params

    if (filmId) {
      const reviews = await Review.find({ filmId }).lean()

      res.status(200).json(reviews)
    } else {
      res.status(404).json({ message: 'Фильм не найден' })
    }
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Что-то пошло не так при загрузке отзывов' })
  }
})

router.get(ApiRoutes.GET_USER_REVIEWS, async (req, res) => {
  try {
    const { userId } = req.params
    console.log(userId)

    if (userId) {
      const reviews = await Review.find({ userId }).lean()

      res.status(200).json(reviews)
    } else {
      res.status(404).json({ message: 'Пользователь не найден' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Что-то пошло не так при загрузке отзывов пользователя',
    })
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

router.delete(ApiRoutes.REMOVE_REVIEW, isAuth, async (req, res) => {
  try {
    const { reviewId } = req.body // в body лежит то что мы передали в data
    console.log(reviewId)

    // код удаления отзыва из моделей Review, User, Films

    // Находим отзыв и через populate получаем ссылки на пользователя и фильм
    const review = await Review.findById(reviewId).populate('userId filmId')

    if (!review) {
      return res.status(404).json({ message: 'Отзыв не найден' })
    }

    // Удаляем сам отзыв, при этом не нужно делать save()
    await Review.findByIdAndDelete(reviewId)

    // Удаляем ссылку на отзыв у пользователя (если userId есть)
    // так как review.userId - это объект пользователя, обращаемся к его id
    // метод $pull удаляет ссылку на отзыв в поле reviews
    if (review.userId) {
      await User.findByIdAndUpdate(review.userId._id, {
        $pull: { reviews: reviewId },
      })
    }

    // Удаляем ссылку на отзыв у фильма (если filmId есть)
    if (review.filmId) {
      await Film.findByIdAndUpdate(review.filmId._id, {
        $pull: { reviews: reviewId },
      })
    }

    res.status(200).json({ message: 'Отзыв удален' })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Что-то пошло не так при удалении отзыва',
    })
  }
})

export default router
