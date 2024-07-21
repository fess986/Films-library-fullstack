type RatingStarProps = {
  rating: number,
  isCurrent: boolean
}

const RatingStar: React.FC<RatingStarProps> = ({ rating, isCurrent }) => {
  return (
    <>
      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" defaultValue={ rating } defaultChecked={isCurrent} />
      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
    </>
  )
}

export default RatingStar;