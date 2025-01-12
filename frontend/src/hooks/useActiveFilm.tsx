import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useToast from './useToast'
import { useAppDispatch } from '../store'
import { setIsActiveFilmLoaded } from '../store/app/appSlice'
import { getFilmList } from '../store/films/filmsSelector'
import { setActiveFilm, setSimilarFilmList } from '../store/films/filmsSlice'
import { FilmProps } from '../types/types'

type UseActiveFilm = {
  currentFilm: FilmProps | null
  isActiveFilmLoaded: boolean
  id: string | undefined
}

const useActiveFilm = (): UseActiveFilm => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const films = useSelector(getFilmList)

  const [currentFilm, setCurrentFilm] = useState<FilmProps | null>(null)
  const [isActiveFilmLoaded, setIsActiveFilmLoadedState] =
    useState<boolean>(false)
  const toast = useToast()

  useEffect(() => {
    const activeFilmFromParams = films.find((film) => film.id === id) || null

    if (films.length !== 0 && !activeFilmFromParams) {
      toast.error('Фильм с таким id не найден')
      dispatch(setIsActiveFilmLoaded(false))
    }

    if (activeFilmFromParams) {
      setCurrentFilm(activeFilmFromParams)
      setIsActiveFilmLoadedState(true)

      const similarFilmsId = activeFilmFromParams?.similarFilms
      if (similarFilmsId && similarFilmsId.length !== 0) {
        const similarFilms = films.filter((film) =>
          similarFilmsId.includes(film.id)
        )
        dispatch(setSimilarFilmList(similarFilms))
      } else {
        dispatch(setSimilarFilmList([]))
      }

      dispatch(setActiveFilm(activeFilmFromParams))
    } else {
      setCurrentFilm(null)
      setIsActiveFilmLoadedState(false)
      dispatch(setIsActiveFilmLoaded(false))
    }
  }, [id, films, dispatch, toast])

  return { id, currentFilm, isActiveFilmLoaded }
}

export default useActiveFilm
