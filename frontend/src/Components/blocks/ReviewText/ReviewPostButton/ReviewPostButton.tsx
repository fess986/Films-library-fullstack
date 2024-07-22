type ReviewPostButtonProps = {
  onClick: () => void
}

const ReviewPostButton: React.FC<ReviewPostButtonProps> = ({ onClick }) => {
  return (
    <button className="review-text__button" type="submit" onClick={onClick}>Post</button>
  )
}

export default ReviewPostButton;