import Video from "../../UI/Video/Video";
import ButtonPlayerExit from "../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit";
import PlayerControls from "../../blocks/PlayerControls/PlayerControls";

import { FilmProps } from "../../../types/types";
import {DivPlayerContainer} from "./styles";

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = ( { film } ) => {
  return (
    <DivPlayerContainer>
      <Video poster={film?.playerImage ? film?.playerImage : '/images/player-poster.jpg'} />

      <ButtonPlayerExit callback={() => {console.log('нажата кнопка плеера')}} />

      <PlayerControls />

    </DivPlayerContainer>
  )
};

export default Player;