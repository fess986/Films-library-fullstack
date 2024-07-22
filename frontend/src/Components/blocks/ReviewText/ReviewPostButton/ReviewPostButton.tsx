import { ButtonReviewPost } from "./styles";

type ReviewPostButtonProps = {
  onClick: () => void
}

const ReviewPostButton: React.FC<ReviewPostButtonProps> = ({ onClick }) => {
  return (
    <ButtonReviewPost type="submit" onClick={onClick}>Post</ButtonReviewPost>
  )
}

export default ReviewPostButton;