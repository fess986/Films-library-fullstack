import React, { ReactNode } from 'react';

interface BodyReviewProps {
  children?: ReactNode
}

const BodyReview: React.FC<BodyReviewProps> = ({ children }) => {
  return (
    <>
      <div className="main-page">
        <div>

          <div className="main-page__container container">

            {children}

          </div>
        </div>

      </div>


    </>
  )
};

export default BodyReview;