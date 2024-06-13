import Logo from "../../UI/Logo.tsx/Logo"
import { Ul, Li } from "../../styled/Components"
import { PageList } from "../../../const/const"
import { NavApp } from "./styles"

type AppNavigationProps = {
  breadcrumbs?: boolean,
  $page?: PageList
}

const AppNavigation: React.FC<AppNavigationProps> = ({ breadcrumbs, $page=PageList.MAIN }) => {

  return (
    <NavApp $page={$page}>
      <Ul>
        <Li>
          <Logo/>
        </Li>

        {breadcrumbs &&
          <Li>
            Крошки
          </Li>
        }

      </Ul>
    </NavApp>
  )
}

export default AppNavigation