import { ButtonSignIn } from "./styles";

type SignInButtonProps = {
  loginHandler: () => void;
  isDisabled: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ( { loginHandler, isDisabled } ) => {
  return (
    <ButtonSignIn onClick={loginHandler} disabled={isDisabled}> Sign in </ButtonSignIn>
  )
}

export default SignInButton;