import { useSelector } from 'react-redux'

import {
  SmallFilmCardLink,
  SmallFilmCardTitle,
  SmallFilmCardImg,
  SmallFilmCardContainer,
  SmallFilmCardArticle,
} from './styles'
import { AppRoutes } from '../../../const/const'
import { useAppDispatch } from '../../../store'
import { setIsSimilarFilmsLoaded } from '../../../store/app/appSlice'
import { getFilmList } from '../../../store/films/filmsSelector'
import {
  setActiveFilm,
  setSimilarFilmList,
} from '../../../store/films/filmsSlice'
import { FilmProps } from '../../../types/types'

type SmallFilmCardProps = {
  film: FilmProps
}

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({ film }) => {
  console.log(film)
  const dispatch = useAppDispatch()
  const films = useSelector(getFilmList)

  const handleClick = () => {
    console.log(
      'click...............................................................'
    )
    console.log(film)
    dispatch(setIsSimilarFilmsLoaded(false))
    dispatch(setActiveFilm(film))

    const similarFilmsId = film?.similarFilms
    if (similarFilmsId && similarFilmsId.length !== 0) {
      const similarFilms = films.filter((film) =>
        similarFilmsId.includes(film.id)
      )
      dispatch(setSimilarFilmList(similarFilms))
    } else {
      dispatch(setSimilarFilmList([]))
    }
    dispatch(setIsSimilarFilmsLoaded(true))
  }

  return (
    <SmallFilmCardArticle>
      <SmallFilmCardContainer onClick={handleClick}>
        <SmallFilmCardImg src={film.previewImage} alt={film.name} />
      </SmallFilmCardContainer>
      <SmallFilmCardTitle>
        <SmallFilmCardLink
          onClick={handleClick}
          to={`${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(':id/*', String(film.id))}`}
        >
          {film.name}
        </SmallFilmCardLink>
      </SmallFilmCardTitle>
    </SmallFilmCardArticle>
  )
}

export default SmallFilmCard
