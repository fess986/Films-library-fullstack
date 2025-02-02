import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  H2Hidden,
  H2CatalogTitle,
  SectionCatalog,
  SectionCatalogContainer,
  DivReviewsContainer,
  DivReviewsCol,
} from './styles'
import { useAppDispatch } from '../../../store'
import { fetchUserReviewsDB } from '../../../store/api-actions'
import { getIsFilmsLoaded } from '../../../store/app/appSelectors'
import { getFavoriteFilmList } from '../../../store/films/filmsSelector'
import {
  getIsUserReviewsLoaded,
  getUserReviewsList,
} from '../../../store/reviews/reviewsSelector'
import { getUserId } from '../../../store/user/userSelectors'
import { FilmProps } from '../../../types/types'
import FilmList from '../../blocks/FilmList/FilmList'
import FilmReview from '../../UI/FilmReview/FilmReview'

const MyList: React.FC = () => {
  const dispatch = useAppDispatch()

  const isFilmsLoaded = useSelector(getIsFilmsLoaded)
  const userId = useSelector(getUserId)
  const isReviewsLoaded = useSelector(getIsUserReviewsLoaded)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserReviewsDB(userId))
    }
  }, [userId, dispatch])

  const favoriteFilms: FilmProps[] = useSelector(getFavoriteFilmList)
  const reviews = useSelector(getUserReviewsList)

  const firstColEnd: number = Math.ceil(reviews.length / 2)

  const getReviews = (start: number, end: number): JSX.Element[] => {
    const content: JSX.Element[] = []
    for (let i = start; i < end; i++) {
      content.push(
        <FilmReview key={reviews[i].id} review={reviews[i]} withButton />
      )
    }
    return content
  }

  return (
    <>
      <SectionCatalogContainer>
        <SectionCatalog $isMoved>
          <H2Hidden as="h2">My favorite films</H2Hidden>
          <H2CatalogTitle>My favorite films</H2CatalogTitle>

          {isFilmsLoaded ? (
            <FilmList films={favoriteFilms} />
          ) : (
            <div>Loading...</div>
          )}
        </SectionCatalog>
      </SectionCatalogContainer>

      <SectionCatalogContainer>
        <SectionCatalog>
          <H2Hidden as="h2">My reviews</H2Hidden>
          <H2CatalogTitle>My reviews</H2CatalogTitle>

          {!isReviewsLoaded ? (
            <DivReviewsContainer>
              <DivReviewsCol>{getReviews(0, firstColEnd)}</DivReviewsCol>

              <DivReviewsCol>
                {getReviews(firstColEnd, reviews.length)}
              </DivReviewsCol>
            </DivReviewsContainer>
          ) : (
            <div>Loading...</div>
          )}
        </SectionCatalog>
      </SectionCatalogContainer>
    </>
  )
}

export default MyList
