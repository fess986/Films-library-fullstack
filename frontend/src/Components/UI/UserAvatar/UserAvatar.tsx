import { useNavigate } from "react-router-dom";

import { ImgUserAvatar, DivUserAvatar } from "./styles";
import { AppRoutes, AuthStatus } from "../../../const/const";

type UserAvatarProps = {
  isAuth?: AuthStatus
}

// добавить вариант с isAuth=false
const UserAvatar: React.FC<UserAvatarProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    isAuth === AuthStatus.AUTH ? navigate(AppRoutes.MY_LIST) : navigate(AppRoutes.SIGN_IN);
  }

  return (
    <DivUserAvatar onClick={clickHandler}>
      <ImgUserAvatar src={isAuth ? "/images/avatar.png" : "/images/avatar.png"} />
    </DivUserAvatar>
  )
}

export default UserAvatar;