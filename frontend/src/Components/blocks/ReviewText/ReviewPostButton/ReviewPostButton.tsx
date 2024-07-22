import { ButtonReviewPost } from "./styles";

type ReviewPostButtonProps = {
  onClick: () => void
}

const ReviewPostButton: React.FC<ReviewPostButtonProps> = ({ onClick }) => {
  return (
    // <button type="submit" onClick={onClick}>Post</button>
    <ButtonReviewPost type="submit" onClick={onClick}>Post</ButtonReviewPost>
  )
}

export default ReviewPostButton;