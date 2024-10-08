import { AppRoutes } from "../../../const/const"
import { LinkSignIn } from "./styles"
import { AuthStatus } from "../../../const/const"

import { useAppDispatch } from "../../../store"
import {setAuthStatus} from "../../../store/user/userSlice"
import { resetFilmsShownCount } from "../../../store/app/appSlice"

type SignInButtonProps = {
  isAuth?: AuthStatus
}

const SignIn: React.FC<SignInButtonProps> = ({ isAuth }) => {

const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setAuthStatus(AuthStatus.NO_AUTH));
    dispatch(resetFilmsShownCount());
  }

  return (
    <>
      {(isAuth === AuthStatus.AUTH) && <LinkSignIn onClick={handleClick} to={AppRoutes.ROOT} >Sign out</LinkSignIn>}
      {(isAuth !== AuthStatus.AUTH) && <LinkSignIn to={AppRoutes.SIGN_IN} >Sign in</LinkSignIn>}
    </>
  )
}

export default SignIn