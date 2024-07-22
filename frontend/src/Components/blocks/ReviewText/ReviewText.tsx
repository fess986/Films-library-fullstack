import ReviewPostButton from "./ReviewPostButton/ReviewPostButton";
import {DivReviewTextContainer, TextareaReviewText, DivReviewText} from "./styles";

type ReviewTextProps = {
  text: string
}

const ReviewText: React.FC<ReviewTextProps> = ({ text }) => {
  return (
    <DivReviewText>
      <TextareaReviewText name="review-text" id="review-text" placeholder="Review text" defaultValue={text} />
      <DivReviewTextContainer>
        <ReviewPostButton onClick={() => {}} />
      </DivReviewTextContainer>
    </DivReviewText>
  )
}

export default ReviewText;