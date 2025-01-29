import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import {
  DivAdditionalFilmInfo,
  DivAdditionalFilmContainer,
  SectionMoreFilms,
  H2MoreFilmsTitle,
} from './styles'
import { FilmMenuList } from '../../../const/const'
import { useAppDispatch } from '../../../store'
import { fetchReviewsDB } from '../../../store/api-actions'
import { getIsSimilarFilmsLoaded } from '../../../store/app/appSelectors'
import {
  getActiveFilm,
  getSimilarFilmList,
} from '../../../store/films/filmsSelector'
import {
  getReviewsList,
  getIsReviewsLoaded,
} from '../../../store/reviews/reviewsSelector'
import { FilmProps } from '../../../types/types'
import FilmDetails from '../../blocks/FilmCard/FilmDetails/FilmDetails'
import FilmOverview from '../../blocks/FilmCard/FilmOverview/FilmOverview'
import FilmReviews from '../../blocks/FilmCard/FilmReviews/FilmReviews'
import FilmList from '../../blocks/FilmList/FilmList'
import FilmMenu from '../../blocks/FilmMenu/FilmMenu'
import { H1Hidden } from '../../styled/Components'
import FilmCardPoster from '../../UI/FilmCardPoster/FilmCardPoster'

const FilmCard: React.FC = () => {
  const dispatch = useAppDispatch()

  const activeFilm: FilmProps | null = useSelector(getActiveFilm)

  const isReviewsLoaded = useSelector(getIsReviewsLoaded)
  const reviews = useSelector(getReviewsList)

  const similarFilms = useSelector(getSimilarFilmList)
  const isSimilarFilmsLoaded = useSelector(getIsSimilarFilmsLoaded)

  useEffect(() => {
    if (activeFilm?.id) {
      dispatch(fetchReviewsDB(activeFilm.id))
    }
  }, [dispatch, activeFilm?.id])

  return (
    <>
      <DivAdditionalFilmContainer>
        <FilmCardPoster
          title={activeFilm?.name ? activeFilm.name : ''}
          img={activeFilm?.posterImage ? activeFilm.posterImage : ''}
        />

        <DivAdditionalFilmInfo>
          <FilmMenu items={FilmMenuList} />

          <Routes>
            <Route path="/" element={<FilmOverview film={activeFilm} />} />
            <Route
              path={FilmMenuList[0].toLowerCase()}
              element={<FilmOverview film={activeFilm} />}
            />
            <Route
              path={FilmMenuList[1].toLowerCase()}
              element={<FilmDetails film={activeFilm} />}
            />
            <Route
              path={FilmMenuList[2].toLowerCase()}
              element={
                isReviewsLoaded ? (
                  <FilmReviews reviews={reviews} />
                ) : (
                  <div>Loading...</div>
                )
              }
            />
          </Routes>
        </DivAdditionalFilmInfo>
      </DivAdditionalFilmContainer>

      <SectionMoreFilms>
        <H1Hidden as={'h2'}>More films like this</H1Hidden>
        <H2MoreFilmsTitle>More films like this</H2MoreFilmsTitle>

        {isSimilarFilmsLoaded ? (
          <FilmList films={similarFilms} />
        ) : (
          <div>Loading...</div>
        )}
      </SectionMoreFilms>
    </>
  )
}

export default FilmCard
