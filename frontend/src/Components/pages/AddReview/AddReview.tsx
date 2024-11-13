import { useState } from "react";
import { FilmProps } from "../../../types/types";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";
import { FormAddReview, SectionAddReview } from "./styles";

type Props = {
  film: FilmProps
}

const AddReview: React.FC<Props> = ({film}) => {
  const [reviewText, setReviewText] = useState<string>("");
  const [reviewRating, setReviewRating] = useState<number>(6);

  return (
    <SectionAddReview>
      <FilmCardPoster img={film.posterImage} title={film.name} center={true}/>
      <FormAddReview action="#" >
        <RatingStars currentRating={reviewRating}/>
        <ReviewText changeHandler={setReviewText} text={reviewText} />
      </FormAddReview>
    </SectionAddReview>
  )
};

export default AddReview;