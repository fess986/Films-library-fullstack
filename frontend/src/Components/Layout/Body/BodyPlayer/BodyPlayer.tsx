import React, { ReactNode } from 'react';
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG';

import { DivPlayer } from './styles';

interface BodyPlayerProps {
  children?: ReactNode
}

const BodyPlayer: React.FC<BodyPlayerProps> = ({ children }) => {
  return (
    <DivPlayer>
      <InjectListSVG play pause fullScreen/>

      { children }
      
    </DivPlayer>

  )
};

export default BodyPlayer;