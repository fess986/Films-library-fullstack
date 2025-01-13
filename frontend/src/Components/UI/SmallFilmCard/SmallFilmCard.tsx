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
import { getSimilarFilms } from '../../../utils/filmsUtils'

type SmallFilmCardProps = {
  film: FilmProps
}

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({ film }) => {
  const dispatch = useAppDispatch()
  const films = useSelector(getFilmList)

  const handleClick = () => {
    dispatch(setIsSimilarFilmsLoaded(false))
    dispatch(setActiveFilm(film))
    const similarFilms = getSimilarFilms(films, film)
    dispatch(setSimilarFilmList(similarFilms))
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
