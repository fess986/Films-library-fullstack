import React from "react";
import { StyledButton } from "../styles";

type ButtonAddProps = {
  callback: () => void
}

const ButtonAdd : React.FC<ButtonAddProps> = ( {callback} ) => {
  return (
    <StyledButton onClick={callback}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </StyledButton>
  )
}

export default ButtonAdd;