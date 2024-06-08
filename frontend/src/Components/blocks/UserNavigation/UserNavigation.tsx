import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import SignIn from "../../UI/SignInButton/SignInButton";
type AppNavigationProps = {
  isAuth?: boolean
}

const UserNavigation: React.FC<AppNavigationProps> = ({ isAuth }) => {

  return (
  <nav>
    <ul className="main-page-header__user-block user-block">
      <li className="user-block__item">
        <UserAvatar isAuth={isAuth}/>
      </li>
      <li className="user-block__item user-block-text">
        <SignIn isAuth={isAuth}/>
      </li>
    </ul>
  </nav>
  )
}

export default UserNavigation