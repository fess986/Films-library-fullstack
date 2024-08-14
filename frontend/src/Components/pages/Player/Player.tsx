import Video from "../../UI/Video/Video";
import ButtonPlayerExit from "../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit";
import PlayerControls from "../../blocks/PlayerControls/PlayerControls";

import { FilmProps } from "../../../types/types";

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = ( { film } ) => {
  return (
    <div className="player-page__player player">
      <Video poster={film?.playerImage ? film?.playerImage : '/images/player-poster.jpg'} />

      <ButtonPlayerExit callback={() => {console.log('нажата кнопка плеера')}} />

      <PlayerControls />

    </div>
  )
};

export default Player;