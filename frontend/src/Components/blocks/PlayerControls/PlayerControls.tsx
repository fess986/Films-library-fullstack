import ButtonPlayerPlay from "../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay";
import ButtonFullScreen from "../../UI/Buttons/ButtonFullScreen/ButtonFullScreen";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import { parseMinutes } from "../../../utils/utils";

import {DivConrolRow, DivControlsTime, DivControlsName, DivControlsContainer} from "./styles";

type PlayerControlsProps = {
  isPlaying: boolean,
  progress?: number,
  remainingTime?: number,
  onPlayButtonClick: () => void
}

const PlayerControls: React.FC<PlayerControlsProps> = ({isPlaying, progress = 0, remainingTime = 0, onPlayButtonClick}) => {
  return (
    <DivControlsContainer>
      <DivConrolRow>
        <ProgressBar value={progress} max={100} name="Toggler" />  
        <DivControlsTime>{parseMinutes(remainingTime)}</DivControlsTime>
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