import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AuthStatus, AppRoutes } from '../../../../const/const'
import { useAppDispatch } from '../../../../store'
import {
  removeFavoriteFilm,
  addFavoriteFilmDB,
  removeFavoriteFilmDB
} from '../../../../store/api-actions'
import { getActiveFilm } from '../../../../store/films/filmsSelector'
import {
  getIsAuth,
  getFavoriteFilms,
  getUserId,
} from '../../../../store/user/userSelectors'
import { StyledButton } from '../styles'

// "prettify": "npx prettier --cache --write 'src/**/*.{js,jsx,ts,tsx}' '**/*.{js,jsx,ts,tsx}' '!**/node_modules/**' '!**/dist/**'"

const ButtonAdd: React.FC = () => {
  const [added, setAdded] = useState(false)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isAuth = useSelector(getIsAuth)
  const favoriteFilmListId = useSelector(getFavoriteFilms)
  const userId = useSelector(getUserId)
  const activeFilm = useSelector(getActiveFilm)

  // проверка в списке ли любимых фильмов этот
  useEffect(() => {
    // заглушка если пользователь не авторизован
    if (isAuth === AuthStatus.NO_AUTH || isAuth === AuthStatus.UNKNOWN) {
      setAdded(false)
    }

    // заглушка если активного фильма нет
    if (isAuth === AuthStatus.AUTH) {
      if (activeFilm === null) {
        setAdded(false)
        return
      }

      // определяем статус фильма
      if (favoriteFilmListId.includes(activeFilm.id)) {
        setAdded(true)
      } else {
        setAdded(false)
      }
    }
  }, [isAuth, activeFilm, favoriteFilmListId])

  const handleClick = () => {
    // если пользователь не авторизован, то перенаправляем его на страницу авторизации
    if (isAuth === AuthStatus.NO_AUTH || isAuth === AuthStatus.UNKNOWN) {
      navigate(AppRoutes.SIGN_IN)
      return
    }

    // если фильм не выбран, то ничего не делаем
    if (activeFilm === null) {
      return
    }

    // если фильм уже в списке любимых, то удаляем его, если нет, то добавляем
    if (added) {
      dispatch(
        removeFavoriteFilm({
          userId: userId || '666',
          filmId: activeFilm.id,
        })
      )
      dispatch(removeFavoriteFilmDB({
        userId: userId || '666',
        filmId: activeFilm.id,
      }))
    } else {
      dispatch(
        addFavoriteFilmDB({
          userId: userId || '',
          filmId: activeFilm.id,
        })
      )

    }
  }

  return (
    <StyledButton onClick={handleClick}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={added ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </StyledButton>
  )
}

export default ButtonAdd
