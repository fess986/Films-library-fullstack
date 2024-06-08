import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const/const";

type AppNavigationProps = {
  breadcrumbs?: boolean
}

const AppNavigation: React.FC<AppNavigationProps> = ({ breadcrumbs }) => {

  return (
    <nav className="main-page-header__logo">
      <ul>
        <li>
          <Link to={AppRoutes.ROOT} className="logo">
            <img className="logo__image" src="/images/logo.jpeg" alt="Films Library" />
          </Link>
        </li>

        {breadcrumbs &&
          <li>
            Крошки
          </li>
        }

      </ul>
    </nav>
  )

}

export default AppNavigation