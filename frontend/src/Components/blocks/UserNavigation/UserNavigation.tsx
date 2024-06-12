import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import SignIn from "../../UI/SignInButton/SignInButton";
import { UserBlockItem, UserBlockText, UserBlockUl } from "./styles";
type AppNavigationProps = {
  isAuth?: boolean
}

const UserNavigation: React.FC<AppNavigationProps> = ({ isAuth }) => {

  return (
  <nav>
    <UserBlockUl>
      <UserBlockItem>
        <UserAvatar isAuth={isAuth}/>
      </UserBlockItem>
      <UserBlockText >
        <SignIn isAuth={isAuth}/>
      </UserBlockText>
    </UserBlockUl>
  </nav>
  )
}

export default UserNavigation