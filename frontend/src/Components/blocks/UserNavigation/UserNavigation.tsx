import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import SignIn from "../../UI/SignInButton/SignInButton";
import { UserBlockItem, UserBlockText, UserBlockUl } from "./styles";
import { useColorContext } from "../../../context/ColorContext/useColorContext";
type AppNavigationProps = {
  isAuth?: boolean
}

const UserNavigation: React.FC<AppNavigationProps> = ({ isAuth }) => {
const {isDark} = useColorContext()

  return (
  <nav>
    <UserBlockUl>
      <UserBlockItem>
        <UserAvatar isAuth={isAuth}/>
      </UserBlockItem>
      <UserBlockText $dark={isDark}>
        <SignIn isAuth={isAuth}/>
      </UserBlockText>
    </UserBlockUl>
  </nav>
  )
}

export default UserNavigation