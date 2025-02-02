import React from 'react'

import { useAppDispatch } from '../../../../store'
import { removeUserReview } from '../../../../store/reviews/reviewsSlice'
import { StyledButton } from '../styles'

type PropsButtonRemove = {
  id: string
}
const ButtonRemove: React.FC<PropsButtonRemove> = ({ id }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(removeUserReview(id))  // удаляем локально в redux
  }

  return (
    <StyledButton onClick={handleClick}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#remove" />
      </svg>
      <span>remove</span>
    </StyledButton>
  )
}

export default ButtonRemove
