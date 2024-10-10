import React from "react";
import { StyledButton } from "../styles";

const ButtonDetails : React.FC = (  ) => {
  return (
    <StyledButton >
      <svg viewBox="0 0 25 25" width={24} height={25}>
        <use xlinkHref="#details" />
      </svg>
      <span>Details</span>
    </StyledButton>
  )
}

export default ButtonDetails;