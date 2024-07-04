import Logo from "../../UI/Logo.tsx/Logo"
import { PageList } from "../../../const/const"
import { NavApp } from "./styles"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"

type AppNavigationProps = {
  breadcrumbs?: boolean,
  $page?: PageList
}

const AppNavigation: React.FC<AppNavigationProps> = ({ breadcrumbs, $page = PageList.MAIN }) => {

  return (
    <NavApp $page={$page}>
      <Logo />
      {breadcrumbs && <Breadcrumbs />}
    </NavApp>
  )
}

export default AppNavigation