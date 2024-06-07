type UserAvatarProps = {
  isAuth?: boolean
}

// добавить вариант с isAuth=false
const UserAvatar: React.FC<UserAvatarProps> = ({ isAuth }) => {
  
  return (
    <div className="user-block__avatar user-avatar">
      <img className="user-avatar__image" src={isAuth ? "/images/avatar.png" : "/images/avatar.png" } alt="User avatar" />
    </div>
  )
}

export default UserAvatar;