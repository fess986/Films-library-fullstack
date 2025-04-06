import {
  DivConrolRow,
  DivControlsTime,
  DivControlsName,
  DivControlsContainer,
} from './styles'
import { parseSeconds } from '../../../utils/utils'
import ButtonFullScreen from '../../UI/Buttons/ButtonFullScreen/ButtonFullScreen'
import ButtonPlayerPlay from '../../UI/Buttons/ButtonPlayerPlay/ButtonPlayerPlay'
import ProgressBar from '../../UI/ProgressBar/ProgressBar'

type PlayerControlsProps = {
  isPlaying: boolean
  isShown: boolean
  progress?: number
  remainingTime?: number
  onPlayButtonClick: () => void
  handlerToggleFullScreen: () => void
  onProgressBarClick: (value: number) => void
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  isShown,
  progress = 0,
  remainingTime = 0,
  onPlayButtonClick,
  handlerToggleFullScreen,
  onProgressBarClick,
}) => {
  return (
    <DivControlsContainer $isShown={isShown}>
      <DivConrolRow>
        <ProgressBar
          onClick={onProgressBarClick}
          value={progress}
          max={100}
          name="Toggler"
        />
        <DivControlsTime>{parseSeconds(remainingTime)}</DivControlsTime>
      </DivConrolRow>

      <DivConrolRow>
        <ButtonPlayerPlay
          state={isPlaying ? 'pause' : 'play'}
          onClick={onPlayButtonClick}
        />
        <DivControlsName>Transpotting</DivControlsName>
        <ButtonFullScreen callback={handlerToggleFullScreen} />
      </DivConrolRow>
    </DivControlsContainer>
  )
}

export default PlayerControls
