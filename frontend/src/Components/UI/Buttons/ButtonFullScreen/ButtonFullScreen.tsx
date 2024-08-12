import { ButtonFullScreenStyle, SvgIcon } from "./styles.ts";

type ButtonFullScreenProps = {
  callback: () => void
}

const ButtonFullScreen: React.FC<ButtonFullScreenProps> = ({ callback }) => {
  return (
    <ButtonFullScreenStyle onClick={callback} >
      <SvgIcon viewBox="0 0 50 50" width={27} height={27}>
        <use xlinkHref="#full-screen" />
      </SvgIcon>
      <span>Full screen</span>
    </ButtonFullScreenStyle>
  )
}

export default ButtonFullScreen;