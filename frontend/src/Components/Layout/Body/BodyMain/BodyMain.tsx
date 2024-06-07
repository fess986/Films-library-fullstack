import React, { ReactNode } from 'react';
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG';

interface BodyMainProps {
  children?: ReactNode
}

const BodyMain: React.FC<BodyMainProps> = ({ children }) => {
  return (
      <div className="main-page">

        <InjectListSVG add play pause/>

          <div className="main-page__container container">
            {children}
          </div>

      </div>

  )
};

export default BodyMain;