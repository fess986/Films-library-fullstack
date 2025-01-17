import { useCallback, useEffect } from 'react'

import { useAppDispatch } from '../store'
import { loginUtil, logoutUtil, checkAuthUtil } from '../utils/authUtils'
import local from '../utils/localStorage'

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
    const data = JSON.parse(local.getItem() || '{}')
    if (data && data.token) {
      console.log('data effect - ', data)
      login(data.token, data.userId, data.favoriteFilms)
    }
  }, [login])

  return { login, logout, checkAuth }
}
