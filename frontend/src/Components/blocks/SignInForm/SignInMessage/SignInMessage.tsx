import { PSignInMessage } from './styles'

type SignInMessageProps = {
  children: React.ReactNode
  isError?: boolean
}

const SignInMessage: React.FC<SignInMessageProps> = ({
  children,
  isError = false,
}) => {
  return <PSignInMessage $isError={isError}>{children}</PSignInMessage>
}

export default SignInMessage
