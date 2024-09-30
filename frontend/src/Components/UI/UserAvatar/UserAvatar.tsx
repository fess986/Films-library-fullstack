import { ImgUserAvatar, DivUserAvatar } from "./styles";
import { AuthStatus } from "../../../const/const";

type UserAvatarProps = {
  isAuth?: AuthStatus
}

// добавить вариант с isAuth=false
const UserAvatar: React.FC<UserAvatarProps> = ({ isAuth }) => {
  return (
    <DivUserAvatar>
      <ImgUserAvatar src={isAuth ? "/images/avatar.png" : "/images/avatar.png"} />
    </DivUserAvatar>
  )
}

export default UserAvatar;