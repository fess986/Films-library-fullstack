import {
  ReviewText,
  ReviewFooter,
  ReviewQuote,
  ReviewAuthor,
  ReviewDate,
  ReviewContainer,
  ReviewRating,
  ButtonContainer,
} from './styles'
import { Review } from '../../../types/types'
import { parseCommentDate, formatDate } from '../../../utils/utils'
import ButtonRemove from '../Buttons/ButtonRemove/ButtonRemove'

type FilmReviewProps = {
  review: Review
  withButton?: boolean
}

const FilmReview: React.FC<FilmReviewProps> = ({ review, withButton }) => {
  return (
    <ReviewContainer>
      <ReviewQuote>
        <ReviewText>{review.commentText}</ReviewText>
        <ReviewFooter>
          <ReviewAuthor>{review.userName}</ReviewAuthor>
          <ReviewDate dateTime={formatDate(review.date)}>
            {parseCommentDate(review.date)}
          </ReviewDate>
        </ReviewFooter>
      </ReviewQuote>
      <ReviewRating>{review.rating.toFixed(1)}</ReviewRating>
      {withButton && (
        <ButtonContainer>
          <ButtonRemove />
        </ButtonContainer>
      )}
    </ReviewContainer>
  )
}

export default FilmReview
