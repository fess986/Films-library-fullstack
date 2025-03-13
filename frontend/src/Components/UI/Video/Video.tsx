import { SyntheticEvent, forwardRef } from 'react'

import { VideoPlayer, IframePlayer } from './styles'

type VideoProps = {
  poster: string
  src?: string
  ref?: React.Ref<HTMLVideoElement>
  onTimeUpdate?: (evt: SyntheticEvent<HTMLVideoElement>) => void
  onClick?: () => void
  onError?: () => void
}

// так выглядело до forwardRef
// const Video: React.FC<VideoProps> = ({ poster, src, onTimeUpdate, onClick, ref }) => {

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ poster, src, onTimeUpdate, onClick, onError }, ref) => {
    const isYouTube = src?.includes('youtube.com/embed')

    return isYouTube ? (
      <IframePlayer
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <VideoPlayer
        ref={ref}
        src={src ? src : '#'}
        // src='https://assets.mixkit.co/videos/4078/4078-720.mp4'
        poster={poster}
        onTimeUpdate={onTimeUpdate}
        onClick={onClick}
        onError={onError}
      />
    )
  }
)

Video.displayName = 'Video' // для удобства отладки

export default Video
