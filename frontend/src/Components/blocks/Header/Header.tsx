import AppNavigation from "../AppNavigation/AppNavigation"
import UserNavigation from "../UserNavigation/UserNavigation"

import { HeaderMain } from "./styles"

import { PageList } from "../../../const/const"
import ColorProvider from "../../../context/ColorContext/colorContext"
import { AuthStatus } from "../../../const/const"

type HeaderProps = {
  breadcrumbs?: boolean,
  isAuth?: AuthStatus,
  $page?: PageList,
  isDark?: boolean
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs, $page = PageList.MAIN, isDark = false }) => {
  return (
    <ColorProvider isDark={isDark}>
      <HeaderMain $page={$page}>
        <AppNavigation breadcrumbs={breadcrumbs} />
        <UserNavigation />
      </HeaderMain>
    </ColorProvider>
  )
}

export default Header