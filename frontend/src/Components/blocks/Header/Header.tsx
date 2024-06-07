import AppNavigation from "../AppNavigation/AppNavigation"
import UserNavigation from "../UserNavigation/UserNavigation"

type HeaderProps = {
  breadcrumbs?: boolean,
  isAuth?: boolean,
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs, isAuth }) => {
  return (
    <header className="hero__header main-page-header">

      <AppNavigation breadcrumbs={breadcrumbs} />

      <UserNavigation isAuth={isAuth}/>

    </header>
  )
}

export default Header