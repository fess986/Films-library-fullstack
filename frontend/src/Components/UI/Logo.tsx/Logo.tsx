import { AppRoutes } from "../../../const/const";
import { LinkLogo, ImgLogo } from "./styled";

type LogoProps = {
  footer?: boolean,
}

const Logo: React.FC<LogoProps> = ({ footer }) => {
  return (
    <LinkLogo to={AppRoutes.ROOT} $footer={footer}>
      <ImgLogo src="/images/logo.jpeg" alt="Films Library" />
    </LinkLogo>
  )
}

export default Logo;