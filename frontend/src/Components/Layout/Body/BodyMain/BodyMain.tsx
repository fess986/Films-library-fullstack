import React, { ReactNode } from 'react';

interface BodyMainProps {
  children?: ReactNode
}

const BodyMain: React.FC<BodyMainProps> = ({ children }) => {
  return (
    <>
      <h1>BodyMain</h1>
      {children}
    </>
  )
};

export default BodyMain;