import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const/const";

type LogoProps = {
  footer?: boolean,
}

const Logo: React.FC<LogoProps> = ({ footer }) => {
  return (
    <Link to={AppRoutes.ROOT} className={`logo ${footer ? 'footer__logo' : ''}`} >
      <img className="logo__image" src="/images/logo.jpeg" alt="Films Library" />
    </Link>
  )
}

export default Logo;