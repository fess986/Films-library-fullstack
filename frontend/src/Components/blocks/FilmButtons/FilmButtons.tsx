import ButtonAdd from "../../UI/Buttons/ButtonAdd/ButtonAdd";
import ButtonPlay from "../../UI/Buttons/ButtonPlay/ButtonPlay";




const FilmButtons: React.FC = () => {
  return (
    <div className="film-card__buttons">
      <ButtonPlay />
      <ButtonAdd />
    </div>
  )
}

export default FilmButtons;