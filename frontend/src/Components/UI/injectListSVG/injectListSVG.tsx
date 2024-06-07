import { Add, FullScreen, InList, Play } from "./svgList";

type InjectListSVGProps = {
  add?: boolean,
  fullScreen?: boolean,
  inList?: boolean,
  play?: boolean
}

const InjectListSVG: React.FC<InjectListSVGProps> = ({ add, fullScreen, inList, play }) => {
  return (
    <div className="visually-hidden">
      {/* inject:svg */}
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

        {add && <Add />}

        {fullScreen && <FullScreen />}

        {inList && <InList />}

        {play && <Play />}

      </svg>
      {/* endinject */}
    </div>
  )
}

export default InjectListSVG;