import React, { ReactNode } from 'react';
import { HeaderProps } from './Header/Header';
import { BodyProps } from './Body/Body';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  HeaderComponent: React.FC<HeaderProps>;
  FooterComponent?: React.FC;
  BodyComponent: React.FC<BodyProps>;
  headerProps?: HeaderProps;
  bodyProps?: BodyProps;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  HeaderComponent, 
  FooterComponent,
  BodyComponent,
  headerProps = {}, 
  bodyProps = {}, 
}) => {
  return (
    <BodyComponent {...bodyProps}>
      <HeaderComponent {...headerProps} />
      <Outlet />
      {FooterComponent &&  <FooterComponent />}
    </BodyComponent>
  );
};

export default Layout;