import React, { ReactNode } from 'react';

export interface BodyProps {
  children?: ReactNode;
  title?: string;
}

const Body: React.FC<BodyProps> = ({ children, title }) => {
  return (
    <body className="body-wrapper">
      {title && <title>{title}</title>}
      {children}
    </body>)
};

export default Body;