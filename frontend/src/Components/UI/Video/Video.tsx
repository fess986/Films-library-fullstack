import {VideoPlayer} from "./styles";

type VideoProps = {
  poster: string,
  src?: string,
}

const Video: React.FC<VideoProps> = ({ poster, src }) => {
  return (
      <VideoPlayer src={src ? src : '#'} poster={poster} />
  )
}

export default Video;