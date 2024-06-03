import React, { ReactNode } from 'react';

interface BodyPlayerProps {
  children?: ReactNode
}

const BodyPlayer: React.FC<BodyPlayerProps> = ({ children }) => {
  return (
    <>
      <h1>BodyPlayer</h1>
      {children}
    </>
  )
};

export default BodyPlayer;