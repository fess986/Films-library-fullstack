import {
  ReviewText,
  ReviewFooter,
  ReviewQuote,
  ReviewAuthor,
  ReviewDate,
  ReviewContainer,
  ReviewRating,
} from './styles'
import { Review } from '../../../types/types'
import { parseCommentDate, formatDate } from '../../../utils/utils'

type FilmReviewProps = {
  review: Review
}

const FilmReview: React.FC<FilmReviewProps> = ({ review }) => {
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
    </ReviewContainer>
  )
}

export default FilmReview
