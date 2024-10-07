import {ButtonMoreFilms} from "./styles";
import {useSelector} from "react-redux";
import { useAppDispatch } from "../../../../store";
import { setFilmsShownCount } from "../../../../store/app/appSlice";
import { getFilmsShownCount } from "../../../../store/app/appSelectors";

const MoreFilmsButton: React.FC = () => {

  const dispatch = useAppDispatch()
  const filmsShownCount = useSelector(getFilmsShownCount);

  
  return (
      <ButtonMoreFilms onClick={() => dispatch(setFilmsShownCount(filmsShownCount + 1))}>Show more</ButtonMoreFilms>
  )
}

export default MoreFilmsButton;