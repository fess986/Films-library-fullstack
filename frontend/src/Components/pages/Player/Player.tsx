import Video from "../../UI/Video/Video";
import ButtonPlayerExit from "../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit";
import PlayerControls from "../../blocks/PlayerControls/PlayerControls";

const Player: React.FC = () => {
  return (
    <div className="player-page__player player">
      <Video poster="/images/player-poster.jpg" />

      <button type="button" className="player__exit-button exit-button">Exit</button>
      <ButtonPlayerExit callback={() => {console.log('нажата кнопка плеера')}} />

      <PlayerControls />

    </div>
  )
};

export default Player;