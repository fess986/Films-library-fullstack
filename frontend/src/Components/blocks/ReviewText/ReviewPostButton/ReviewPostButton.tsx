import { ButtonReviewPost } from "./styles";

type ReviewPostButtonProps = {
  onClick: () => void,
  isDisabled: boolean
}

const ReviewPostButton: React.FC<ReviewPostButtonProps> = ({ onClick, isDisabled }) => {
  return (
    <ButtonReviewPost disabled={isDisabled} type="submit" onClick={onClick}>Post</ButtonReviewPost>
  )
}

export default ReviewPostButton;