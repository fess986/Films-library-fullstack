import Logo from "../../UI/Logo.tsx/Logo"
import { Ul, Li } from "../../styled/Components"
import { PageList } from "../../../const/const"
import { NavApp } from "./styles"

type AppNavigationProps = {
  breadcrumbs?: boolean,
  $page?: PageList
}

const AppNavigation: React.FC<AppNavigationProps> = ({ breadcrumbs, $page = PageList.MAIN }) => {

  return (
    <NavApp $page={$page}>
      <Logo />

      {breadcrumbs &&
        <nav className="main-page-header__breadcrumbs breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="/" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a href="/" className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      }
    </NavApp>
  )
}

export default AppNavigation