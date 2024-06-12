import { StyledButton } from "../styles";

const ButtonAdd = (): JSX.Element => {
  return (
    <StyledButton>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </StyledButton>
  )
}

export default ButtonAdd;