import AppNavigation from "../AppNavigation/AppNavigation"
import UserNavigation from "../UserNavigation/UserNavigation"

import { HeaderMain } from "./styles"

import { PageList } from "../../../const/const"
import ColorProvider from "../../../context/ColorContext/colorContext"

type HeaderProps = {
  breadcrumbs?: boolean,
  isAuth?: boolean,
  $page?: PageList,
  isDark?: boolean
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs, isAuth, $page = PageList.MAIN, isDark = false }) => {
  return (
    <ColorProvider isDark={isDark}>
      <HeaderMain $page={$page}>
        <AppNavigation breadcrumbs={breadcrumbs} />
        <UserNavigation isAuth={isAuth} />
      </HeaderMain>
    </ColorProvider>
  )
}

export default Header