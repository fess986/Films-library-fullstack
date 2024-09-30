import { AppRoutes } from "../../../const/const"
import { LinkSignIn } from "./styles"
import { AuthStatus } from "../../../const/const"

type SignInButtonProps = {
  isAuth?: AuthStatus
}

const SignIn: React.FC<SignInButtonProps> = ({ isAuth }) => {
  return (
    <>
      {isAuth && <LinkSignIn to={AppRoutes.ROOT} >Sign out</LinkSignIn>}
      {!isAuth && <LinkSignIn to={AppRoutes.SIGN_IN} >Sign in</LinkSignIn>}
    </>
  )
}

export default SignIn