import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getIsAuth, getFavoriteFilms } from "../../../../store/user/userSelectors";
import { getActiveFilm } from "../../../../store/films/filmsSelector";
import { AuthStatus, AppRoutes } from "../../../../const/const";

import { StyledButton } from "../styles";

const ButtonAdd : React.FC = (  ) => {
  const [added, setAdded] = useState(false);

  const navigate = useNavigate();

  const isAuth = useSelector(getIsAuth);
  console.log('isAuth', isAuth)
  const favoriteFilmListId = useSelector(getFavoriteFilms);
  console.log('favoriteFilmListId', favoriteFilmListId)

  const activeFilm = useSelector(getActiveFilm);
  console.log('activeFilm', activeFilm)

  useEffect(() => {
    if (isAuth === AuthStatus.NO_AUTH || isAuth === AuthStatus.UNKNOWN) {
      setAdded(false);
    }

    if (isAuth === AuthStatus.AUTH) {
      if (activeFilm === null) {
        setAdded(false);
        return
      }

      if (favoriteFilmListId.includes(activeFilm.id)) {
        setAdded(true);
      } else {
        setAdded(false);
      }
    }

  }, [isAuth, activeFilm, favoriteFilmListId]);

  const handleClick = () => {
    if (isAuth === AuthStatus.NO_AUTH || isAuth === AuthStatus.UNKNOWN) {
      navigate(AppRoutes.SIGN_IN);
      return;
    }

    setAdded(!added);  // тут будет логика проверки есть ли фильм в списке любимых TODO
    console.log('добавить логику добавления фильма в списоок любимых') 
  } 

  return (
    <StyledButton onClick={handleClick} >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={added ? "#in-list" : "#add"} />
        {/* <use xlinkHref="#in-list" /> */}
        {/* <use xlinkHref="#add" /> */}
      </svg>
      <span>My list</span>
    </StyledButton>
  )
}

export default ButtonAdd;