import AppNavigation from "../AppNavigation/AppNavigation"
import UserNavigation from "../UserNavigation/UserNavigation"
import { HeaderMain } from "./styles"

import { PageList } from "../../../const/const"

type HeaderProps = {
  breadcrumbs?: boolean,
  isAuth?: boolean,
  $page?: PageList ,
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs, isAuth, $page=PageList.MAIN }) => {
  return (
    <HeaderMain $page={$page}>
      <AppNavigation breadcrumbs={breadcrumbs} />
      <UserNavigation isAuth={isAuth}/>
    </HeaderMain>
  )
}

export default Header