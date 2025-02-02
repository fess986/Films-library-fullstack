import React from 'react'

import { StyledButton } from '../styles'

const ButtonRemove: React.FC = () => {
  const handleClick = () => {
    console.log('click')
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
