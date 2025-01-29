import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AuthStatus, AppRoutes } from '../../../../const/const'
import { getIsAuth } from '../../../../store/user/userSelectors'
import { StyledButton } from '../styles'

const ButtonUserPage: React.FC = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(getIsAuth)

  const handleClick = () => {
    isAuth === AuthStatus.AUTH
      ? navigate(AppRoutes.MY_LIST)
      : navigate(AppRoutes.SIGN_IN)
  }

  return (
    <StyledButton onClick={handleClick}>
      <svg viewBox="0 0 25 25" width={25} height={25}>
        <use xlinkHref="#user" />
      </svg>
      <span>User Page</span>
    </StyledButton>
  )
}

export default ButtonUserPage
