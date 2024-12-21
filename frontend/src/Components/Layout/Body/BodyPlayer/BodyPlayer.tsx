import React, { ReactNode } from 'react';

import { DivPlayer } from './styles';
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG';


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