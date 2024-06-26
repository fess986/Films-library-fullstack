import { Review } from "../../../types/types";
import { ReviewText, ReviewFooter, ReviewQuote, ReviewAuthor, ReviewDate, ReviewContainer, ReviewRating } from "./styles";
import { parseCommentDate, formatDate } from "../../../utils/utils";

type FilmReviewProps = {
  review: Review,
}

const FilmReview: React.FC<FilmReviewProps> = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewQuote>
        <ReviewText>
          {review.comment}
        </ReviewText>
        <ReviewFooter>
          <ReviewAuthor>{review.user.name}</ReviewAuthor>
          <ReviewDate dateTime={formatDate(review.date)}>{parseCommentDate(review.date)}</ReviewDate>
        </ReviewFooter>
      </ReviewQuote>
      <ReviewRating>{review.rating.toFixed(1)}</ReviewRating>
    </ReviewContainer>
  )
}

export default FilmReview;