import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { StoreNames } from '../../const/const'
import { fetchReviewsDB, sendReviewDB } from '../../store/api-actions'
import { Review } from '../../types/types'

type ReviewsState = {
  reviewsList: Review[]
  userReviewsList: Review[]

  isReviewsLoaded: boolean
  isReviewSending: boolean
  isUserReviewsLoaded: boolean
}

const initialReviewsState: ReviewsState = {
  reviewsList: [],
  userReviewsList: [],

  isReviewsLoaded: false,
  isReviewSending: false,
  isUserReviewsLoaded: false,
}

export const reviewsSlice = createSlice({
  name: StoreNames.Reviews,
  initialState: initialReviewsState,
  reducers: {
    setIsReviewsLoaded: (state, action: PayloadAction<boolean>) => {
      state.isReviewsLoaded = action.payload
    },
    setIsReviewSending: (state, action: PayloadAction<boolean>) => {
      state.isReviewSending = action.payload
    },
    setReviewsList: (state, action: PayloadAction<Review[]>) => {
      state.reviewsList = action.payload
    },
    setUserReviewsList: (state, action: PayloadAction<Review[]>) => {
      state.userReviewsList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsDB.pending, (state) => {
        state.isReviewsLoaded = false
      })
      .addCase(fetchReviewsDB.fulfilled, (state) => {
        state.isReviewsLoaded = true
      })
      .addCase(fetchReviewsDB.rejected, (state) => {
        state.isReviewsLoaded = false
        toast.error('Не удалось загрузить отзывы')
      })

      .addCase(sendReviewDB.pending, (state) => {
        state.isReviewSending = true
      })
      .addCase(sendReviewDB.fulfilled, (state) => {
        state.isReviewSending = false
      })
      .addCase(sendReviewDB.rejected, (state) => {
        state.isReviewSending = false
        toast.error('Не удалось отправить отзыв')
      })
  },
})

export const { setIsReviewsLoaded, setIsReviewSending, setReviewsList } =
  reviewsSlice.actions
