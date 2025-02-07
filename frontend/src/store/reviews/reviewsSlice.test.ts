import { toast } from 'react-toastify'
import { describe, it, expect, vi } from 'vitest'

import {
  reviewsSlice,
  initialReviewsState,
  setIsReviewsLoaded,
  setIsReviewSending,
  setReviewsList,
  setUserReviewsList,
} from './reviewsSlice'
import { fetchReviewsDB, sendReviewDB } from '../../store/api-actions'
import { createFakeReview } from '../../test/test-utils/mockReview'
import { Review } from '../../types/types'

vi.mock('react-toastify', () => ({ toast: { error: vi.fn() } }))

describe('reviewsSlice reducer', () => {
  it('should return the initial state', () => {
    expect(reviewsSlice.reducer(undefined, { type: 'undefined' })).toEqual(
      initialReviewsState
    )
  })

  it('should handle setIsReviewsLoaded', () => {
    const newState = reviewsSlice.reducer(
      initialReviewsState,
      setIsReviewsLoaded(true)
    )
    expect(newState.isReviewsLoaded).toBe(true)
  })

  it('should handle setIsReviewSending', () => {
    const newState = reviewsSlice.reducer(
      initialReviewsState,
      setIsReviewSending(true)
    )
    expect(newState.isReviewSending).toBe(true)
  })

  it('should handle setReviewsList', () => {
    const reviews = [createFakeReview(), createFakeReview()]
    const newState = reviewsSlice.reducer(
      initialReviewsState,
      setReviewsList(reviews as Review[])
    )
    expect(newState.reviewsList).toEqual(reviews)
  })

  it('should handle setUserReviewsList', () => {
    const userReviews = [
      createFakeReview(),
      createFakeReview(),
      createFakeReview(),
    ]
    const newState = reviewsSlice.reducer(
      initialReviewsState,
      setUserReviewsList(userReviews)
    )
    expect(newState.userReviewsList).toEqual(userReviews)
  })

  it('should handle fetchReviewsDB.rejected', () => {
    const action = { type: fetchReviewsDB.rejected.type }
    reviewsSlice.reducer(initialReviewsState, action)
    expect(toast.error).toHaveBeenCalledWith('Не удалось загрузить отзывы')
  })

  it('should handle sendReviewDB.rejected', () => {
    const action = { type: sendReviewDB.rejected.type }
    reviewsSlice.reducer(initialReviewsState, action)
    expect(toast.error).toHaveBeenCalledWith('Не удалось отправить отзыв')
  })
})
