import { Add, FullScreen, InList, Play, Pause } from "./svgList";

type InjectListSVGProps = {
  add?: boolean,
  fullScreen?: boolean,
  inList?: boolean,
  play?: boolean,
  pause?: boolean
}

const InjectListSVG: React.FC<InjectListSVGProps> = ({ add, fullScreen, inList, play, pause }) => {
  return (
    <div className="visually-hidden">
      {/* inject:svg */}
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

        {add && <Add />}

        {fullScreen && <FullScreen />}

        {inList && <InList />}

        {play && <Play />}

        {pause && <Pause />}

      </svg>
      {/* endinject */}
    </div>
  )
}

export default InjectListSVG;