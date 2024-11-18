import { RatingInput, RatingLabel } from "./styles";

type RatingStarProps = {
  rating: number,
  isCurrent: boolean,
  changeHandler: (rating: number) => void,
  isBlocked: boolean
}

const RatingStar: React.FC<RatingStarProps> = ({ rating, isCurrent, changeHandler, isBlocked }) => {
  return (
    <>
      <RatingInput disabled={isBlocked} onClick={() => {changeHandler(rating)}} id={`star-${rating}`} type="radio" name="rating" defaultValue={ rating } defaultChecked={isCurrent} />
      <RatingLabel htmlFor={`star-${rating}`}>{`Rating ${rating}`}</RatingLabel>
    </>
  )
}

export default RatingStar;