type VideoProps = {
  poster: string,
  src?: string,
}

const Video: React.FC<VideoProps> = ({ poster, src }) => {
  return (
    <>
      <video src={src ? src : '#'} className="player__video" poster={poster} />
    </>
  )
}

export default Video;