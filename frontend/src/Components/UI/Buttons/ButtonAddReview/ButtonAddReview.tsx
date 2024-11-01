import React from "react";
import { StyledButton } from "../styles";
import { useNavigate } from "react-router-dom";
import {AppRoutes} from "../../../../const/const";

const ButtonAddReview : React.FC = (  ) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${AppRoutes.ROOT}${AppRoutes.ADD_REVIEW.replace(':id', '2')}`)
  } 

  return (
    <StyledButton onClick={handleClick} >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>Add review</span>
    </StyledButton>
  )
}

export default ButtonAddReview;