import { Dispatch, SetStateAction } from "react";
import ReviewPostButton from "./ReviewPostButton/ReviewPostButton";
import {DivReviewTextContainer, TextareaReviewText, DivReviewText} from "./styles";

type ReviewTextProps = {
  text: string,
  changeHandler: Dispatch<SetStateAction<string>>
}

const ReviewText: React.FC<ReviewTextProps> = ({ text, changeHandler }) => {

  return (
    <DivReviewText>
      <TextareaReviewText onChange={(evt) => changeHandler(evt.target.value)} name="review-text" id="review-text" placeholder="Review text" defaultValue={text} />
      <DivReviewTextContainer>
        <ReviewPostButton onClick={() => {}} />
      </DivReviewTextContainer>
    </DivReviewText>
  )
}

export default ReviewText;