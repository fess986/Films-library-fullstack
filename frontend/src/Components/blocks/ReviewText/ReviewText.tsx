import ReviewPostButton from "./ReviewPostButton/ReviewPostButton";

type ReviewTextProps = {
  text: string
}

const ReviewText: React.FC<ReviewTextProps> = ({ text }) => {
  return (
    <div className="add-review-form___review-text review-text">
      <textarea className="review-text__input" name="review-text" id="review-text" placeholder="Review text" defaultValue={text} />
      <div className="review-text__btn-container">
        <ReviewPostButton onClick={() => {}} />
      </div>
    </div>
  )
}

export default ReviewText;