import React, { ReactNode } from 'react';

interface BodyReviewProps {
  children?: ReactNode
}

const BodyReview: React.FC<BodyReviewProps> = ({ children }) => {
  return (
    <>
      <h1>BodyReview</h1>
      {children}
    </>
  )
};

export default BodyReview;