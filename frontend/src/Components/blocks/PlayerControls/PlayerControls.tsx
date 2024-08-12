import ButtonPlayerPlay from "../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay";
import ButtonFullScreen from "../../UI/Buttons/ButtonFullScreen/ButtonFullScreen";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";

import {DivConrolRow, DivControlsTime, DivControlsName, DivControlsContainer} from "./styles";

const PlayerControls: React.FC = () => {
  return (
    <DivControlsContainer>
      <DivConrolRow>

        <ProgressBar value={30} max={100} name="Toggler" />  {/* дописать */}

        <DivControlsTime>1:30:29</DivControlsTime>
      </DivConrolRow>

      <DivConrolRow>


        <ButtonPlayerPlay callback={() => { console.log('нажата кнопка плеера') }} /> {/* дописать */}

        <DivControlsName>Transpotting</DivControlsName>


        <ButtonFullScreen callback={() => { console.log('нажата кнопка фуллскрина') }} />  {/* дописать */}

      </DivConrolRow>
    </DivControlsContainer>
  )
}

export default PlayerControls;