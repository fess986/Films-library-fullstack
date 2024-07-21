import RatingStar from "./RatingStar/RatingStar"

const starList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type RatingStarsProps = {
  currentRating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ currentRating = 5 }) => {
  console.log(currentRating)
  return (
    <div className="add-review-form__rating-stars rating-stars">

        {starList.map(star => (
          <RatingStar key={star} rating={star} isCurrent={currentRating === star}/>
        ))}

        </div>
  )
}

export default RatingStars;