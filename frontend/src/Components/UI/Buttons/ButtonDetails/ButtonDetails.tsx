import React from "react";
import { StyledButton } from "../styles";
import { getActiveFilm } from "../../../../store/films/filmsSelector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../const/const";
import { resetFilmsShownCount } from "../../../../store/app/appSlice";
import { useAppDispatch } from "../../../../store";

const ButtonDetails : React.FC = (  ) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentFilm = useSelector(getActiveFilm);

  const handleClick = () => {
    currentFilm && navigate(`${AppRoutes.ROOT}${AppRoutes.FILM_CARD.replace(':id', String(currentFilm.id))}`)
    dispatch(resetFilmsShownCount());
  }

  return (
    <StyledButton onClick={handleClick} >
      <svg viewBox="0 0 25 25" width={24} height={25}>
        <use xlinkHref="#details" />
      </svg>
      <span>Details</span>
    </StyledButton>
  )
}

export default ButtonDetails;