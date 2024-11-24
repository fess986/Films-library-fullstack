import ButtonPlayerPlay from "../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay";
import ButtonFullScreen from "../../UI/Buttons/ButtonFullScreen/ButtonFullScreen";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

import {DivConrolRow, DivControlsTime, DivControlsName, DivControlsContainer} from "./styles";

type PlayerControlsProps = {
  isPlaying: boolean,
  onPlayButtonClick: () => void
}

const PlayerControls: React.FC<PlayerControlsProps> = ({isPlaying, onPlayButtonClick}) => {
  return (
    <DivControlsContainer>
      <DivConrolRow>
        <ProgressBar value={30} max={100} name="Toggler" />  
        <DivControlsTime>1:30:29</DivControlsTime>
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