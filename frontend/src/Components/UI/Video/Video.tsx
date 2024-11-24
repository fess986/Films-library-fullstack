import {SyntheticEvent} from "react";

import {VideoPlayer} from "./styles";

type VideoProps = {
  poster: string,
  src?: string,
  onTimeUpdate?: (evt : SyntheticEvent<HTMLVideoElement>) => void,
  onClick?: () => void
}

const Video: React.FC<VideoProps> = ({ poster, src, onTimeUpdate, onClick }) => {
  console.log(src)
  return (
      <VideoPlayer src={src ? src : '#'} poster={poster} onTimeUpdate={onTimeUpdate} onClick={onClick} />
  )
}

export default Video;