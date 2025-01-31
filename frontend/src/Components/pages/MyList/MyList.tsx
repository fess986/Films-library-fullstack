import { useSelector } from 'react-redux'

import {
  H2Hidden,
  H2CatalogTitle,
  SectionCatalog,
  SectionCatalogContainer,
  DivReviewsContainer,
  DivReviewsCol,
} from './styles'
import { Reviews } from '../../../mock/reviews'
import {
  getIsFilmsLoaded,
  getIsDataLoading,
} from '../../../store/app/appSelectors'
import { getFavoriteFilmList } from '../../../store/films/filmsSelector'
import { FilmProps } from '../../../types/types'
import FilmList from '../../blocks/FilmList/FilmList'
import FilmReview from '../../UI/FilmReview/FilmReview'

const MyList: React.FC = () => {
  const isFilmsLoaded = useSelector(getIsFilmsLoaded)
  const isDataLoading = useSelector(getIsDataLoading)
  const favoriteFilms: FilmProps[] = useSelector(getFavoriteFilmList)
  const reviews = Reviews

  const firstColEnd: number = Math.ceil(reviews.length / 2)

  const getReviews = (start: number, end: number): JSX.Element[] => {
    const content: JSX.Element[] = []
    for (let i = start; i < end; i++) {
      content.push(<FilmReview key={reviews[i].id} review={reviews[i]} />)
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

          {!isDataLoading ? (
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
