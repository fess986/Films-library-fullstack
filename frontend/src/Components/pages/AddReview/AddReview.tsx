import { useState } from 'react'
import { useSelector } from 'react-redux'

import { FormAddReview, SectionAddReview } from './styles'
import {
  MINIMUM_REVIEW_LENGTH,
  MAXIMUM_REVIEW_LENGTH,
} from '../../../const/const'
import useActiveFilm from '../../../hooks/useActiveFilm'
import { useAppDispatch } from '../../../store'
import { sendReview } from '../../../store/api-actions'
import { getIsReviewsSending } from '../../../store/reviews/reviewsSelector'
import { getUserId } from '../../../store/user/userSelectors'
import { commentProps } from '../../../types/types'
import RatingStars from '../../blocks/RatingStars/RatingStars'
import ReviewText from '../../blocks/ReviewText/ReviewText'
import FilmCardPoster from '../../UI/FilmCardPoster/FilmCardPoster'

const AddReview: React.FC = () => {
  const [reviewText, setReviewText] = useState<string>('') // текст отзыва
  const [reviewRating, setReviewRating] = useState<number>(6) // количество поставленных звёзд
  const [isReviewDisabled, setIsReviewDisabled] = useState<boolean>(true) // проверка на длину текста отзыва

  const dispatch = useAppDispatch()
  const { currentFilm, isActiveFilmLoaded, id } = useActiveFilm()
  const userId = useSelector(getUserId)
  const isFormBlocked = useSelector(getIsReviewsSending)

  const comment: commentProps = {
    text: reviewText,
    rating: reviewRating,
    filmId: id || '',
    userId: userId || '',
    date: new Date().toISOString(),
  }

  const handleReviewTextChange = (text: string) => {
    setIsReviewDisabled(
      text.length < MINIMUM_REVIEW_LENGTH || text.length > MAXIMUM_REVIEW_LENGTH
    )
    setReviewText(text)
    console.log(comment)
  }

  const submitHandler = () => {
    console.log(comment)
    dispatch(sendReview(comment))
  }

  return !isActiveFilmLoaded || !currentFilm ? (
    <div>Loading</div>
  ) : (
    <SectionAddReview>
      <FilmCardPoster
        img={currentFilm.posterImage}
        title={currentFilm.name}
        center={true}
      />
      <FormAddReview onSubmit={(evt) => evt.preventDefault()}>
        <RatingStars
          isFormBlocked={isFormBlocked}
          changeHandler={setReviewRating}
          currentRating={reviewRating}
        />
        <ReviewText
          isBlocked={isFormBlocked}
          changeHandler={handleReviewTextChange}
          postHandler={submitHandler}
          text={reviewText}
          isReviewDisabled={isReviewDisabled}
        />
      </FormAddReview>
    </SectionAddReview>
  )
}

export default AddReview
