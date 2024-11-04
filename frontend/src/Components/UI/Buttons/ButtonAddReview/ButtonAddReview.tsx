import React from "react";
import { StyledButton } from "../styles";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../const/const";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../../../store/user/userSelectors";
import { getActiveFilm } from "../../../../store/films/filmsSelector";

import { AuthStatus } from "../../../../const/const";


const ButtonAddReview: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuth);
  const currentFilm = useSelector(getActiveFilm);
  const id = currentFilm?.id || 0;

  const handleClick = () => {
    isAuth === AuthStatus.AUTH ? navigate(`${AppRoutes.ROOT}${AppRoutes.ADD_REVIEW.replace(':id', String(id))}`) :
      navigate(`${AppRoutes.ROOT}${AppRoutes.SIGN_IN}`)
  }

  return (
    <>
      {currentFilm && (
        <StyledButton onClick={handleClick} >
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
          <span>Add review</span>
        </StyledButton>)
      }
    </>

  )
}

export default ButtonAddReview;