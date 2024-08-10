import { useNavigate } from "react-router-dom";
import {AppRoutes} from "../../../../const/const";

import { StyledButton } from "../styles";

type ButtonPlayProps = {
  id: number
}
const ButtonPlay: React.FC<ButtonPlayProps> =  ( {id} ) => {
  const navigate = useNavigate();

  return (
    <StyledButton  onClick={() => {
      // меняем путь AppRoutes.PLAYER вместо :id подставляем конкретный id из props
      navigate(`${AppRoutes.ROOT}${AppRoutes.PLAYER.replace(':id', String(id))}`)
    }}>
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </StyledButton>
  )
}

export default ButtonPlay;