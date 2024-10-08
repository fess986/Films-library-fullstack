import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import SignIn from "../../UI/SignInButton/SignInButton";
import { UserBlockItem, UserBlockText, UserBlockUl } from "./styles";
import { useColorContext } from "../../../context/ColorContext/useColorContext";

import { useSelector } from "react-redux";
import { getIsAuth } from "../../../store/user/userSelectors";

const UserNavigation: React.FC = () => {
const {isDark} = useColorContext()
const isAuth = useSelector(getIsAuth)

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