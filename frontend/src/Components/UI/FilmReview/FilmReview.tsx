import { useSelector } from 'react-redux'

import {
  ReviewText,
  ReviewFooter,
  ReviewQuote,
  ReviewAuthor,
  ReviewDate,
  ReviewContainer,
  ReviewRating,
  ButtonContainer,
  ReviewFilm,
} from './styles'
import { getFilmById } from '../../../store/films/filmsSelector'
import { Review } from '../../../types/types'
import { parseCommentDate, formatDate } from '../../../utils/utils'
import ButtonRemove from '../Buttons/ButtonRemove/ButtonRemove'

type FilmReviewProps = {
  review: Review
  withButton?: boolean
}

const FilmReview: React.FC<FilmReviewProps> = ({ review, withButton }) => {
  const film = useSelector(getFilmById(review.filmId))
  const filmName = film?.name || 'Unknown film'

  return (
    <ReviewContainer>
      <ReviewQuote>
        <ReviewText>{review.commentText}</ReviewText>
        <ReviewFooter>
          {withButton ? (
            <ReviewFilm>{filmName}</ReviewFilm>
          ) : (
            <ReviewAuthor>{review.userName}</ReviewAuthor>
          )}

          <ReviewDate dateTime={formatDate(review.date)}>
            {parseCommentDate(review.date)}
          </ReviewDate>
        </ReviewFooter>
      </ReviewQuote>
      <ReviewRating>{review.rating.toFixed(1)}</ReviewRating>

      {withButton && (
        <ButtonContainer>
          <ButtonRemove id={review.id} />
        </ButtonContainer>
      )}
    </ReviewContainer>
  )
}

export default FilmReview
