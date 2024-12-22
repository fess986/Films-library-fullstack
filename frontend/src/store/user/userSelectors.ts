import { StoreNames } from '../../const/const'
import { RootState } from '../index'

export const getIsAuth = (state: RootState) => state[StoreNames.User].isAuth
export const getFavoriteFilms = (state: RootState) =>
  state[StoreNames.User].favoriteFilms
export const getUserId = (state: RootState) => state[StoreNames.User].userId
export const getToken = (state: RootState) => state[StoreNames.User].token
