import React, { ReactNode } from 'react';

interface BodySignInProps {
  children?: ReactNode
}

const BodySignIn: React.FC<BodySignInProps> = ({ children }) => {
  return (
    <>
      <h1>BodySignIn</h1>
      {children}
    </>
  )
};

export default BodySignIn;