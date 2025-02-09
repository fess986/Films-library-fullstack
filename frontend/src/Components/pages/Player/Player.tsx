import React, { useState, useRef, useEffect } from 'react'

import { DivPlayerContainer } from './styles'
import useActiveFilm from '../../../hooks/useActiveFilm'
import { FilmProps } from '../../../types/types'
import createToast from '../../../utils/toast'
import PlayerControls from '../../blocks/PlayerControls/PlayerControls'
import ButtonPlayerExit from '../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit'
import Video from '../../UI/Video/Video'
// import { current } from "@reduxjs/toolkit";

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = () => {
  const [isLoading, setIsloading] = useState(true)
  const [isPlaying, setIsPlaing] = useState(false)
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0)
  const [filmDuration, setfilmDuration] = useState(0)
  const [playRowPosition, setPlayRowPosition] = useState(0)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { currentFilm } = useActiveFilm()
  const toast = createToast()

  // обновляем текущее время видео
  const handlerCurrentTimePlaying = () => {
    if (videoRef.current) {
      setCurrentTimePlaying(videoRef.current.currentTime)
    }
  }

  // переключение полноэкранного режима
  const handlerToggleFullScreen = () => {
    /* eslint-disable */
    const document: any = window.document
    /* eslint-enable */
    const elem = document.documentElement

    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        /* eslint-disable */
        elem.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT)
        /* eslint-enable */
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
  }

  // обновляем полосу прогресса при нажатии на неё
  const handleProgressBarClick = (newValue: number) => {
    const newTime = (newValue / 100) * filmDuration // Переводим процент в секунды
    if (videoRef.current) {
      videoRef.current.currentTime = newTime // Устанавливаем новое время
      setCurrentTimePlaying(newTime) // Обновляем состояние
    }
  }

  // переключение воспроизведения
  const playButtonClick = () => {
    if (videoRef.current === null) {
      return
    }

    if (isLoading) {
      toast.error('Фильм ещё не загружен')
      return
    }

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaing((value: boolean): boolean => !value)
    } else {
      videoRef.current.pause()
      setIsPlaing((value: boolean): boolean => !value)
    }
  }

  // получаем длинну видео
  useEffect(() => {
    if (videoRef.current === null) {
      return
    }

    videoRef.current.addEventListener('loadeddata', () => {
      setIsloading(false)
      setfilmDuration((current) => {
        if (videoRef.current) {
          // console.log(videoRef.current)
          current = videoRef.current.duration
        }
        return current
      })
    })
  }, [])

  // устанавливаем позицию прогресс бара
  useEffect(() => {
    setPlayRowPosition(Math.floor((currentTimePlaying / filmDuration) * 100))
  }, [currentTimePlaying, filmDuration, playRowPosition])

  return (
    <DivPlayerContainer>
      <Video
        ref={videoRef}
        poster={
          currentFilm?.playerImage
            ? currentFilm?.playerImage
            : '/images/player-poster.jpg'
        }
        src={currentFilm?.videoLink}
        onTimeUpdate={handlerCurrentTimePlaying}
        onClick={playButtonClick}
      />

      <ButtonPlayerExit />

      <PlayerControls
        onProgressBarClick={handleProgressBarClick}
        onPlayButtonClick={playButtonClick}
        handlerToggleFullScreen={handlerToggleFullScreen}
        isPlaying={isPlaying}
        progress={playRowPosition || 0}
        remainingTime={Math.floor(filmDuration - currentTimePlaying)}
      />
    </DivPlayerContainer>
  )
}

export default Player
