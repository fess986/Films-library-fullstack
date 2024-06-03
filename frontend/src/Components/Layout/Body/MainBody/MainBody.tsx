import React, { ReactNode } from 'react';

export interface MainBodyProps {
  children?: ReactNode
}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
  return (
    <>
      <h1>MainBody</h1>
      {children}
    </>
  )
};

export default MainBody;