import { ImgUserAvatar, DivUserAvatar } from "./styles";

type UserAvatarProps = {
  isAuth?: boolean
}

// добавить вариант с isAuth=false
const UserAvatar: React.FC<UserAvatarProps> = ({ isAuth }) => {
  
  return (
    <DivUserAvatar>
      <ImgUserAvatar src={isAuth ? "/images/avatar.png" : "/images/avatar.png" } alt="User avatar" />
    </DivUserAvatar>
  )
}

export default UserAvatar;