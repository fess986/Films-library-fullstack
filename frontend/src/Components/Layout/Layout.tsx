import React, { ReactNode } from 'react';
import { HeaderProps } from './Header/Header';
import { FooterProps } from './Footer/Footer';
import { BodyProps } from './Body/Body';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  HeaderComponent: React.FC<HeaderProps>;
  FooterComponent: React.FC<FooterProps>;
  BodyComponent: React.FC<BodyProps>;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  bodyProps?: BodyProps;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  HeaderComponent, // Используем MainHeader по умолчанию
  FooterComponent,
  BodyComponent,
  headerProps = {}, // По умолчанию пустой объект
  footerProps = {},
  bodyProps = {}, // По умолчанию пустой объект
}) => {
  return (
    <BodyComponent {...bodyProps}>
      <HeaderComponent {...headerProps} />
      <Outlet />
      <FooterComponent {...footerProps} />
    </BodyComponent>
  );
};

export default Layout;