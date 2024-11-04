import React from "react";
import { StyledButton } from "../styles";
import { useState } from "react";

const ButtonAdd : React.FC = (  ) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
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