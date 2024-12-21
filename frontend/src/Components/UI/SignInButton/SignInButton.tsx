import { LinkSignIn } from "./styles"
import { AppRoutes , AuthStatus } from "../../../const/const"
import { useAuth } from "../../../hooks/useAuth"

type SignInButtonProps = {
  isAuth?: AuthStatus
}

const SignIn: React.FC<SignInButtonProps> = ({ isAuth }) => {
const { logout } = useAuth()
const handleClick = () => logout()

  return (
    <>
      {(isAuth === AuthStatus.AUTH) && <LinkSignIn onClick={handleClick} to={AppRoutes.ROOT} >Sign out</LinkSignIn>}
      {(isAuth !== AuthStatus.AUTH) && <LinkSignIn to={AppRoutes.SIGN_IN} >Sign in</LinkSignIn>}
    </>
  )
}

export default SignIn