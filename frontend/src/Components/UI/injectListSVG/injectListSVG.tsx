import { Add, FullScreen, InList, Play, Pause, Details } from './svgList'
import { DivHidden } from '../../styled/Components'

type InjectListSVGProps = {
  add?: boolean
  fullScreen?: boolean
  inList?: boolean
  play?: boolean
  pause?: boolean
  details?: boolean
}

const InjectListSVG: React.FC<InjectListSVGProps> = ({
  add,
  fullScreen,
  inList,
  play,
  pause,
  details,
}) => {
  return (
    <DivHidden>
      {/* inject:svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {add && <Add />}

        {fullScreen && <FullScreen />}

        {inList && <InList />}

        {play && <Play />}

        {pause && <Pause />}

        {details && <Details />}
      </svg>
      {/* endinject */}
    </DivHidden>
  )
}

export default InjectListSVG
