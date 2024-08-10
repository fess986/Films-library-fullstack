import {ButtonExit} from "./styles";

type ButtonPlayerExitProps = {
  callback: () => void,
}

const ButtonPlayerExit: React.FC<ButtonPlayerExitProps> = ({callback}) => {
  return (
    <ButtonExit onClick={callback}>Exit</ButtonExit>
  )
}

export default ButtonPlayerExit;