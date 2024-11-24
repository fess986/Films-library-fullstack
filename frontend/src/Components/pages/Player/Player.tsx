import Video from "../../UI/Video/Video";
import ButtonPlayerExit from "../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit";
import PlayerControls from "../../blocks/PlayerControls/PlayerControls";

import useActiveFilm from "../../../hooks/useActiveFilm";

import { FilmProps } from "../../../types/types";
import {DivPlayerContainer} from "./styles";

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = () => {
  const { currentFilm, isActiveFilmLoaded, id } = useActiveFilm();

  console.log(id)
  console.log(currentFilm)
  console.log(isActiveFilmLoaded)

  // console.log(film)

  return (
    <DivPlayerContainer>
      <Video poster={currentFilm?.playerImage ? currentFilm?.playerImage : '/images/player-poster.jpg'} src={currentFilm?.videoLink} 
      onTimeUpdate={(evt) => {console.log(evt)}} onClick={() => {console.log('нажата кнопка плеера')}} />

      <ButtonPlayerExit />

      <PlayerControls />

    </DivPlayerContainer>
  )
};

export default Player;