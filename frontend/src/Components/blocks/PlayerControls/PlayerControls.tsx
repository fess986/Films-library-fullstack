import ButtonPlayerPlay from "../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay";
import ButtonFullScreen from "../../UI/Buttons/ButtonFullScreen/ButtonFullScreen";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

import {DivConrolRow, DivControlsTime, DivControlsName, DivControlsContainer} from "./styles";

type PlayerControlsProps = {
  isPlaying: boolean,
  progress?: number,
  duration?: number,
  onPlayButtonClick: () => void
}

const PlayerControls: React.FC<PlayerControlsProps> = ({isPlaying, progress = 0, duration = 0, onPlayButtonClick}) => {
  return (
    <DivControlsContainer>
      <DivConrolRow>
        <ProgressBar value={progress} max={100} name="Toggler" />  
        <DivControlsTime>{duration}</DivControlsTime>
      </DivConrolRow>

      <DivConrolRow>
        <ButtonPlayerPlay state={isPlaying ? 'pause' : 'play'} onClick={onPlayButtonClick} /> 
        <DivControlsName>Transpotting</DivControlsName>
        <ButtonFullScreen callback={() => { console.log('нажата кнопка фуллскрина') }} />  
      </DivConrolRow>
    </DivControlsContainer>
  )
}

export default PlayerControls;