
import { FilmProps } from '../types/types'

export const getSimilarFilms = 
    (allFilms: FilmProps[], activeFilm: FilmProps | null) => {
      const similarFilmsId = activeFilm?.similarFilms
      if (similarFilmsId && similarFilmsId.length !== 0) {
        const similarFilms = allFilms.filter((film) =>
          similarFilmsId.includes(film.id)
        )
        return similarFilms
      }
      return []
    }