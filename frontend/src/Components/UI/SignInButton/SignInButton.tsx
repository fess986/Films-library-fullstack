import { AppRoutes } from "../../../const/const"
import { LinkSignIn } from "./styles"

type SignInButtonProps = {
  isAuth?: boolean
}

const SignIn: React.FC<SignInButtonProps> = ({ isAuth }) => {
  console.log(isAuth)
  return (
    <>
      {isAuth && <LinkSignIn to={AppRoutes.ROOT} >Sign out</LinkSignIn>}
      {!isAuth && <LinkSignIn to={AppRoutes.SIGN_IN} >Sign in</LinkSignIn>}
    </>
  )
}

export default SignIn