import React, { ReactNode } from 'react';
import InjectListSVG from '../../../UI/injectListSVG/injectListSVG';

interface BodyPlayerProps {
  children?: ReactNode
}

const BodyPlayer: React.FC<BodyPlayerProps> = ({ children }) => {
  return (
    <div className="player-page">

      <InjectListSVG play pause fullScreen/>

      { children }
    </div>

  )
};

export default BodyPlayer;