import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useToast from './useToast'
import { useAppDispatch } from '../store'
import { getIsActiveFilmLoaded } from '../store/app/appSelectors'
import {
  setIsActiveFilmLoaded,
  setIsSimilarFilmsLoaded,
} from '../store/app/appSlice'
import { getFilmList } from '../store/films/filmsSelector'
import { setActiveFilm, setSimilarFilmList } from '../store/films/filmsSlice'
import { FilmProps } from '../types/types'
import { getSimilarFilms } from '../utils/filmsUtils'

type UseActiveFilm = {
  currentFilm: FilmProps | null
  isActiveFilmLoaded: boolean
  id: string | undefined
  getSimilarFilms: (allFilms: FilmProps[], activeFilm: FilmProps | null) => void
}

const useActiveFilm = (): UseActiveFilm => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const films = useSelector(getFilmList)

  const [currentFilm, setCurrentFilm] = useState<FilmProps | null>(null)
  const isActiveFilmLoaded = useSelector(getIsActiveFilmLoaded)
  const toast = useToast()

  // устанавливаем список похожих фильмов по текущему и
  const setSimilarFilms = useCallback(
    (allFilms: FilmProps[], activeFilm: FilmProps | null) => {
      dispatch(setIsSimilarFilmsLoaded(false))
      const similarFilms = getSimilarFilms(allFilms, activeFilm)  // получаем список похожих фильмов
      dispatch(setSimilarFilmList(similarFilms))
      dispatch(setIsSimilarFilmsLoaded(true))
    },
    [dispatch]
  )

  useEffect(() => {
    const activeFilmFromParams = films.find((film) => film.id === id) || null

    if (films.length !== 0 && !activeFilmFromParams) {
      toast.error('Фильм с таким id не найден')
      dispatch(setIsActiveFilmLoaded(false))
      dispatch(setActiveFilm(null))
      setCurrentFilm(null)
      return
    }

    setCurrentFilm(activeFilmFromParams)
    dispatch(setActiveFilm(activeFilmFromParams))
    setSimilarFilms(films, activeFilmFromParams)
  }, [id, films, dispatch, toast, setSimilarFilms])

  return { id, currentFilm, isActiveFilmLoaded, getSimilarFilms }
}

export default useActiveFilm
