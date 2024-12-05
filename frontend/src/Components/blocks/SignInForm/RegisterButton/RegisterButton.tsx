import { ButtonRegister } from "./styles";

type RegisterButtonProps = {
  registerHandler: () => void,
  isDisabled: boolean
}

const RegisterButton: React.FC<RegisterButtonProps> = ( {registerHandler, isDisabled} ) => {
  return (
    <ButtonRegister onClick={registerHandler} disabled={isDisabled}> Register </ButtonRegister>
  )
}

export default RegisterButton;