import Logo from "../../UI/Logo.tsx/Logo"

type AppNavigationProps = {
  breadcrumbs?: boolean
}

const AppNavigation: React.FC<AppNavigationProps> = ({ breadcrumbs }) => {

  return (
    <nav className="main-page-header__logo">
      <ul>
        <li>
          <Logo/>
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