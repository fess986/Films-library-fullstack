import { useState } from "react";
import { MINIMUM_REVIEW_LENGTH, MAXIMUM_REVIEW_LENGTH } from "../../../const/const";
import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";
import useActiveFilm from "../../../hooks/useActiveFilm";

import { FormAddReview, SectionAddReview } from "./styles";

const AddReview: React.FC = () => {
  const [reviewText, setReviewText] = useState<string>(""); // текст отзыва
  const [reviewRating, setReviewRating] = useState<number>(6); // количество поставленных звёзд
  const [isReviewDisabled, setIsReviewDisabled] = useState<boolean>(true);  // проверка на длину текста отзыва

  const {currentFilm, isActiveFilmLoaded} = useActiveFilm();

  const handleReviewTextChange = (text: string) => {
    setIsReviewDisabled(text.length < MINIMUM_REVIEW_LENGTH || text.length > MAXIMUM_REVIEW_LENGTH);
    setReviewText(text);
  };

  return (

    !isActiveFilmLoaded || !currentFilm ? <div>Loading</div> :

    <SectionAddReview>
      <FilmCardPoster img={currentFilm.posterImage} title={currentFilm.name} center={true}/>
      <FormAddReview action="#" >
        <RatingStars currentRating={reviewRating}/>
        <ReviewText changeHandler={handleReviewTextChange} text={reviewText} isReviewDisabled={isReviewDisabled} />
      </FormAddReview>
    </SectionAddReview>
  )
};

export default AddReview;