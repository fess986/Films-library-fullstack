import { StoreNames } from '../../const/const'
import { RootState } from '../index'

export const getReviewsList = (state: RootState) =>
  state[StoreNames.Reviews].reviewsList
export const getIsReviewsLoaded = (state: RootState) =>
  state[StoreNames.Reviews].isReviewsLoaded
export const getIsReviewsSending = (state: RootState) =>
  state[StoreNames.Reviews].isReviewSending

export const getUserReviewsList = (state: RootState) =>
  state[StoreNames.Reviews].userReviewsList
export const getIsUserReviewsLoaded = (state: RootState) =>
  state[StoreNames.Reviews].isUserReviewsLoaded
