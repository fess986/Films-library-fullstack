import { Link } from "react-router-dom"
import { AppRoutes } from "../../../const/const"

type SignInButtonProps = {
  isAuth?: boolean
}

const SignIn: React.FC<SignInButtonProps> = ({ isAuth }) => {
  return (
    <>
      {isAuth && <Link to={AppRoutes.ROOT} className="user-block__link">Sign out</Link>}
      {!isAuth && <Link to={AppRoutes.SIGN_IN} className="user-block__link">Sign in</Link>}
    </>
  )
}

export default SignIn