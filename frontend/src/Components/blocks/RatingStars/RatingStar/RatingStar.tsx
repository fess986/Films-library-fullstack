import { RatingInput, RatingLabel } from "./styles";

type RatingStarProps = {
  rating: number,
  isCurrent: boolean
}

const RatingStar: React.FC<RatingStarProps> = ({ rating, isCurrent }) => {
  return (
    <>
      <RatingInput id={`star-${rating}`} type="radio" name="rating" defaultValue={ rating } defaultChecked={isCurrent} />
      <RatingLabel htmlFor={`star-${rating}`}>{`Rating ${rating}`}</RatingLabel>
    </>
  )
}

export default RatingStar;