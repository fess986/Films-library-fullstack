import React, { ReactNode } from 'react';
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG';
import { DivMainContainer, BodyMainStyled } from './styles';

export type BodyMainProps = {
  children?: ReactNode,
}

const BodyMain: React.FC<BodyMainProps> = ({ children }) => {
  return (
    <BodyMainStyled>
      <InjectListSVG add play pause details inList />

      <DivMainContainer>
        {children}
      </DivMainContainer>

    </BodyMainStyled>

  )
};

export default BodyMain;