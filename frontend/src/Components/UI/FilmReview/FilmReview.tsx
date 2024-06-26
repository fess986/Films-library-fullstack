import { Review } from "../../../types/types";
import { ReviewText, ReviewFooter, ReviewQuote, ReviewAuthor, ReviewDate, ReviewContainer } from "./styles";

type FilmReviewProps = {
  review: Review,
}

const FilmReview: React.FC<FilmReviewProps> = ({ review }) => {
  console.log(review)
  return (
    <ReviewContainer>
      <ReviewQuote>
        <ReviewText>
          Discerning travellers and Wes Anderson fans will luxuriate
          in the glorious Mittel-European kitsch of one of the
          director's funniest and most exquisitely designed films in
          years.
        </ReviewText>
        <ReviewFooter>
          <ReviewAuthor>Kate Muir</ReviewAuthor>
          <ReviewDate dateTime="2016-12-24">December 24, 2016</ReviewDate>
        </ReviewFooter>
      </ReviewQuote>
      <div className="movie-page-review__rating">8,9</div>
    </ReviewContainer>
  )
}

export default FilmReview;