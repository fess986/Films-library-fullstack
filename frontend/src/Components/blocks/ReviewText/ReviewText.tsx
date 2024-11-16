import ReviewPostButton from "./ReviewPostButton/ReviewPostButton";
import {DivReviewTextContainer, TextareaReviewText, DivReviewText} from "./styles";
import { MINIMUM_REVIEW_LENGTH, MAXIMUM_REVIEW_LENGTH } from "../../../const/const";

type ReviewTextProps = {
  text: string,
  changeHandler: (text: string) => void,
  isReviewDisabled: boolean
}

const ReviewText: React.FC<ReviewTextProps> = ({ text, changeHandler, isReviewDisabled }) => {

  return (
    <DivReviewText>
      <TextareaReviewText onChange={(evt) => changeHandler(evt.target.value)} name="review-text" id="review-text" placeholder={`Write your review ${MINIMUM_REVIEW_LENGTH} - ${MAXIMUM_REVIEW_LENGTH} symbols`} defaultValue={text} />
      <DivReviewTextContainer>
        <ReviewPostButton isDisabled={isReviewDisabled} onClick={() => {}}  />
      </DivReviewTextContainer>
    </DivReviewText>
  )
}

export default ReviewText;