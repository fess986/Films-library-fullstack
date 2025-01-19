import { Router } from 'express'

import { Review } from '../models/Reviews.js'

const router = Router()

router.post('/get-reviews', async (req, res) => {
  // console.log(req)
  // console.log(res)
  try {
    console.log('запрос reviews')
    const reviews = await Review.find({})
    console.log(reviews)
    res.status(200).json(reviews)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Что-то пошло не так при загрузке отзывов' })
  }
})

export default router
