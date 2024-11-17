import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../../../store";

import { FilmProps } from "../../../types/types";
import { MINIMUM_REVIEW_LENGTH, MAXIMUM_REVIEW_LENGTH } from "../../../const/const";

import {  getIsActiveFilmLoaded } from "../../../store/app/appSelectors";
import { getActiveFilm, getFilmList } from "../../../store/films/filmsSelector";
import { setActiveFilm } from "../../../store/films/filmsSlice";
import { setIsActiveFilmLoaded } from "../../../store/app/appSlice";

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

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const films = useSelector(getFilmList);
  const isActiveFilmLoaded = useSelector(getIsActiveFilmLoaded);
  const activeFilmFromParams = films.find((film) => film.id === Number(id)) || null;

  useEffect(() => {
    if (!activeFilmFromParams) {
      return
    }
    
    activeFilmFromParams && dispatch(setActiveFilm(activeFilmFromParams));
    dispatch(setIsActiveFilmLoaded(true));
  }, [activeFilmFromParams, films, dispatch]);

  const currentFilm : FilmProps | null = useSelector(getActiveFilm);

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