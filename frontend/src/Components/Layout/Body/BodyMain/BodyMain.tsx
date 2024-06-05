import React, { ReactNode } from 'react';

interface BodyMainProps {
  children?: ReactNode
}

const BodyMain: React.FC<BodyMainProps> = ({ children }) => {
  return (
    <>
      <div className="main-page">
        {children}
      </div>
    </>
  )
};

export default BodyMain;