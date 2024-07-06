import React, { ReactNode } from 'react';
// import { HeaderProps } from './Header/Header';
// import { BodyProps } from './Body/Body';
import { Outlet } from 'react-router-dom';

// interface LayoutProps<HeaderProps, BodyProps> {
//   HeaderComponent?: React.FC<HeaderProps>;
//   FooterComponent?: React.FC;
//   BodyComponent: React.FC<BodyProps>;
//   headerProps?: HeaderProps;
//   bodyProps?: BodyProps;
//   children?: ReactNode;
// }

// const Layout  = <HeaderProps, BodyProps> ({
//   HeaderComponent, 
//   FooterComponent,
//   BodyComponent,
//   headerProps = {} as HeaderProps, 
//   bodyProps = {} as BodyProps, 
// }) : LayoutProps<HeaderProps, BodyProps> => {
//   return (
//     <BodyComponent {...bodyProps}>
//       {HeaderComponent &&  <HeaderComponent {...headerProps}/>}
//       <Outlet />
//       {FooterComponent &&  <FooterComponent />}
//     </BodyComponent>
//   );
// };

interface LayoutProps<HP, BP> {
  HeaderComponent?: React.FC<HP>;
  FooterComponent?: React.FC;
  BodyComponent: React.FC<BP>;
  headerProps?: HP;
  bodyProps?: BP;
  children?: ReactNode;
}

const Layout = <HP, BP>({
  HeaderComponent,
  FooterComponent,
  BodyComponent,
  headerProps = {} as HP,
  bodyProps = {} as BP,
}: LayoutProps<HP, BP>) => {
  return (
    <BodyComponent {...bodyProps as BP}>
      // @ts-expect-error
      {HeaderComponent &&
        // @ts-expect-error HeaderComponent - ругается на то, что возможные передаваемые параметры не поддерживаются, если пробовать её исправить, потом при использовании компонента Layout все компоненты нужно будет приводить к этому типу, что очень сильно тормозит разработку, и в итоге TS уже не помогает, а мешает разработке
        <HeaderComponent
          {...headerProps} />}
      <Outlet />
      {FooterComponent && <FooterComponent />}
    </BodyComponent>
  );
};


export default Layout;