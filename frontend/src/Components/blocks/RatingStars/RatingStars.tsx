import RatingStar from "./RatingStar/RatingStar"
import { DivRatingStars } from "./styles";

const starList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type RatingStarsProps = {
  currentRating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ currentRating = 5 }) => {
  
  return (
    <DivRatingStars>

      {starList.map(star => (
        <RatingStar key={star} rating={star} isCurrent={currentRating === star} />
      ))}

    </DivRatingStars>
  )
}

export default RatingStars;