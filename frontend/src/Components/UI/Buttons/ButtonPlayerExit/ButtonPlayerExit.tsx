import { useNavigate } from "react-router-dom";

import {AppRoutes} from "../../../../const/const";
import {ButtonExit} from "./styles";
import { resetFilmsShownCount } from "../../../../store/app/appSlice";
import { useAppDispatch } from "../../../../store";


const ButtonPlayerExit: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ButtonExit onClick={() => {dispatch(resetFilmsShownCount())
    navigate(AppRoutes.ROOT)
    }}>Exit</ButtonExit>
  )
}

export default ButtonPlayerExit;