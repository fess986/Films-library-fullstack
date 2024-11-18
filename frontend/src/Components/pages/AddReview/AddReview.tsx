import { useState } from "react";
import { useSelector } from "react-redux";

import { MINIMUM_REVIEW_LENGTH, MAXIMUM_REVIEW_LENGTH } from "../../../const/const";
import { getUserId } from "../../../store/user/userSelectors";
import { commentProps } from "../../../types/types";
import useActiveFilm from "../../../hooks/useActiveFilm";

import FilmCardPoster from "../../UI/FilmCardPoster/FilmCardPoster";
import RatingStars from "../../blocks/RatingStars/RatingStars";
import ReviewText from "../../blocks/ReviewText/ReviewText";

import { FormAddReview, SectionAddReview } from "./styles";

const AddReview: React.FC = () => {
  const [reviewText, setReviewText] = useState<string>(""); // текст отзыва
  const [reviewRating, setReviewRating] = useState<number>(6); // количество поставленных звёзд
  const [isReviewDisabled, setIsReviewDisabled] = useState<boolean>(true);  // проверка на длину текста отзыва

  const { currentFilm, isActiveFilmLoaded, id } = useActiveFilm();
  const userId = useSelector(getUserId);

  const comment: commentProps = {
    text: reviewText,
    rating: reviewRating,
    filmId: Number(id),
    userId: userId || 1,
  };
  console.log(comment);

  const isFormBlocked = true;

  const handleReviewTextChange = (text: string) => {
    setIsReviewDisabled(text.length < MINIMUM_REVIEW_LENGTH || text.length > MAXIMUM_REVIEW_LENGTH);
    setReviewText(text);
  };

  return (

    !isActiveFilmLoaded || !currentFilm ? <div>Loading</div> :

      <SectionAddReview>
        <FilmCardPoster img={currentFilm.posterImage} title={currentFilm.name} center={true} />
        <FormAddReview onSubmit={(evt) => evt.preventDefault()} >
          <RatingStars isFormBlocked={isFormBlocked} changeHandler={setReviewRating} currentRating={reviewRating} />
          <ReviewText isBlocked={isFormBlocked} changeHandler={handleReviewTextChange} text={reviewText} isReviewDisabled={isReviewDisabled} />
        </FormAddReview>
      </SectionAddReview>
  )
};

export default AddReview;