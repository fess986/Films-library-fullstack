import React, { ReactNode } from 'react';

import { DivMainContainer, BodyMainStyled } from './styles';

interface BodySignInProps {
  children?: ReactNode
}

const BodySignIn: React.FC<BodySignInProps> = ({ children }) => {
  return (
    <BodyMainStyled>

      <DivMainContainer>
        {children}
      </DivMainContainer>

    </BodyMainStyled>

  )
};

export default BodySignIn;