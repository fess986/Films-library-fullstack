// import { Action, Dispatch } from "@reduxjs/toolkit";
import RatingStar from "./RatingStar/RatingStar"
import { DivRatingStars } from "./styles";

const starList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type RatingStarsProps = {
  currentRating: number,
  changeHandler: (rating: number) => void
}

const RatingStars: React.FC<RatingStarsProps> = ({ currentRating = 5, changeHandler }) => {
  
  return (
    <DivRatingStars>

      {starList.map(star => (
        <RatingStar changeHandler={changeHandler} key={star} rating={star} isCurrent={currentRating === star} />
      ))}

    </DivRatingStars>
  )
}

export default RatingStars;