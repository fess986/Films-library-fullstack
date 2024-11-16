import { useState } from "react";

import { FilmProps } from "../../../types/types";
import { MINIMUM_REVIEW_LENGTH, MAXIMUM_REVIEW_LENGTH } from "../../../const/const";

import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";

import { FormAddReview, SectionAddReview } from "./styles";

type Props = {
  film: FilmProps
}

const AddReview: React.FC<Props> = ({film}) => {
  const [reviewText, setReviewText] = useState<string>(""); // текст отзыва
  const [reviewRating, setReviewRating] = useState<number>(6); // количество поставленных звёзд
  const [isReviewDisabled, setIsReviewDisabled] = useState<boolean>(true);  // проверка на длину текста отзыва

  const handleReviewTextChange = (text: string) => {
    setIsReviewDisabled(text.length < MINIMUM_REVIEW_LENGTH || text.length > MAXIMUM_REVIEW_LENGTH);
    setReviewText(text);
  };

  return (
    <SectionAddReview>
      <FilmCardPoster img={film.posterImage} title={film.name} center={true}/>
      <FormAddReview action="#" >
        <RatingStars currentRating={reviewRating}/>
        <ReviewText changeHandler={handleReviewTextChange} text={reviewText} isReviewDisabled={isReviewDisabled} />
      </FormAddReview>
    </SectionAddReview>
  )
};

export default AddReview;