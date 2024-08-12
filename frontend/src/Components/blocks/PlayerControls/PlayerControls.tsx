import ButtonPlayerPlay from "../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay";
import ButtonFullScreen from "../../UI/Buttons/ButtonFullScreen/ButtonFullScreen";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

const PlayerControls: React.FC = () => {
  return (
    <div className="player__controls controls">
      <div className="controls__row">

        <ProgressBar value={30} max={100} />

        <div className="controls__time-value">1:30:29</div>
      </div>
      <div className="controls__row">

        <ButtonPlayerPlay callback={() => { console.log('нажата кнопка плеера') }} />

        <div className="controls__name">Transpotting</div>

        <ButtonFullScreen callback={() => { console.log('нажата кнопка фуллскрина') }} />

      </div>
    </div>
  )
}

export default PlayerControls;