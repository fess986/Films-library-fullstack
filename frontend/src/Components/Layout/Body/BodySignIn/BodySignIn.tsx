import React, { ReactNode } from 'react';

interface BodySignInProps {
  children?: ReactNode
}

const BodySignIn: React.FC<BodySignInProps> = ({ children }) => {
  return (
<div className="main-page">

  <div className="main-page__container container">
  { children }
  </div>
  
</div>

  )
};

export default BodySignIn;