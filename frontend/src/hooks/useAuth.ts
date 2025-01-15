import { useCallback, useEffect } from 'react'

import { storageName } from '../const/const'
import { useAppDispatch } from '../store'
import { loginUtil, logoutUtil, checkAuthUtil } from '../utils/authUtils'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const login = useCallback(
    (jwtToken: string, id: string, favoriteFilms: string[]) => {
      loginUtil(dispatch, jwtToken, id, favoriteFilms)
    },
    [dispatch]
  )

  const logout = useCallback(() => {
    logoutUtil(dispatch)
  }, [dispatch])

  const checkAuth = useCallback(() => {
    return checkAuthUtil(dispatch)
  }, [dispatch])

  // для обновления состояния приложения
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}')
    if (data && data.token) {
      console.log('data effect - ', data)
      login(data.token, data.userId, data.favoriteFilms)
    }
  }, [login])

  return { login, logout, checkAuth }
}
