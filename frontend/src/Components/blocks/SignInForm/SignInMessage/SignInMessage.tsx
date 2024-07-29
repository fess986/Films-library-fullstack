type SignInMessageProps = {
  children: React.ReactNode
  isError?: boolean,
}

const SignInMessage: React.FC<SignInMessageProps> = ({children, isError = false }) => {
  console.log(isError)

  return (
    <p className="sign-in__message-text message-text message-text--normal">
      {children}
    </p>
  )
}

export default SignInMessage;