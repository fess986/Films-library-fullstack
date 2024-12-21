import { LinkLogo, ImgLogo } from "./styled";
import { AppRoutes } from "../../../const/const";
import { useAppDispatch } from "../../../store";
import { resetFilmsShownCount } from "../../../store/app/appSlice";

type LogoProps = {
  footer?: boolean,
}

const Logo: React.FC<LogoProps> = ({ footer }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetFilmsShownCount())
  }

  return (
    <LinkLogo onClick={handleClick} to={AppRoutes.ROOT} $footer={footer}>
      <ImgLogo src="/images/logo.jpeg" alt="Films Library" />
    </LinkLogo>
  )
}

export default Logo;