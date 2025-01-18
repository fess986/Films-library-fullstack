import { AuthStatus } from '../const/const'
import { AppDispatch } from '../store'
import local from './localStorage'
import { resetFilmsShownCount } from '../store/app/appSlice'
import {
  setToken,
  setUserId,
  setAuthStatus,
  setFavoriteFilms,
} from '../store/user/userSlice'

export const loginUtil = (
  dispatch: AppDispatch,
  jwtToken: string,
  id: string,
  favoriteFilms: string[]
): void => {
  console.log(favoriteFilms)
  // Диспатчим действия в Redux
  dispatch(setToken(jwtToken))
  dispatch(setUserId(id))
  dispatch(setAuthStatus(AuthStatus.AUTH))
  dispatch(setFavoriteFilms(favoriteFilms))

  // Сохраняем данные в localStorage
  local.setItem({
    userId: id,
    token: jwtToken,
    favoriteFilms: favoriteFilms,
  })
}

export const logoutUtil = (dispatch: AppDispatch): void => {
  dispatch(setToken(null))
  dispatch(setUserId(null))
  dispatch(setAuthStatus(AuthStatus.NO_AUTH))
  dispatch(resetFilmsShownCount())
  dispatch(setFavoriteFilms([]))

  local.removeItem()
}

export const checkAuthUtil = (dispatch: AppDispatch): AuthStatus => {
  // const data = JSON.parse(local.getItem() || '{}')
  const data = local.getItem()
  if (data && data.token) {
    loginUtil(dispatch, data.token, data.userId, data.favoriteFilms)
    return AuthStatus.AUTH
  }
  return AuthStatus.NO_AUTH
}
