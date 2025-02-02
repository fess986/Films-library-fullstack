import React, { ReactNode } from 'react'

import { DivMainContainer, BodyMainStyled } from './styles'
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG'

interface BodySignInProps {
  children?: ReactNode
}

const BodySignIn: React.FC<BodySignInProps> = ({ children }) => {
  return (
    <BodyMainStyled>
      <InjectListSVG remove />
      <DivMainContainer>{children}</DivMainContainer>
    </BodyMainStyled>
  )
}

export default BodySignIn
