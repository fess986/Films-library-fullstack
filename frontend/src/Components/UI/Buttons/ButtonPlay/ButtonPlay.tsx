import { StyledButton } from "../styles";

const ButtonPlay = (): JSX.Element => {
  return (
    <StyledButton>
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </StyledButton>
  )
}

export default ButtonPlay;