import React, { useState, useRef, useEffect, useCallback } from 'react'

import { DivPlayerContainer } from './styles'
import { TMDBService } from '../../../api/tmdb.service'
import { altVideoLink } from '../../../const/const'
import useActiveFilm from '../../../hooks/useActiveFilm'
import { FilmProps } from '../../../types/types'
import createToast from '../../../utils/toast'
import PlayerControls from '../../blocks/PlayerControls/PlayerControls'
import ButtonPlayerExit from '../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit'
import Video from '../../UI/Video/Video'

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = () => {
  const [isLoading, setIsloading] = useState(true)
  const [loadingAttempt, setLoadingAttempt] = useState(0)
  const [isPlaying, setIsPlaing] = useState(false)
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0)
  const [filmDuration, setfilmDuration] = useState(0)
  const [playRowPosition, setPlayRowPosition] = useState(0)
  const [videoSource, setVideoSource] = useState<string>('')
  const [tmdbVideoLoaded, setTmdbVideoLoaded] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const { currentFilm } = useActiveFilm()
  const toast = createToast()
  const timeoutRef = useRef<NodeJS.Timeout>()

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

  // обработка ошибки загрузки видео
  const handleVideoError = useCallback(() => {
    console.log('Ошибка загрузки:', videoRef.current?.src)
    console.log(currentFilm?.tmdbId)
    setTmdbVideoLoaded(false)

    if (videoRef.current?.src !== altVideoLink) {
      if (loadingAttempt === 0) {
        console.log('Первая попытка перезагрузки')
        setLoadingAttempt(1)
        // Пробуем загрузить текущий источник еще раз
        videoRef.current?.load()
        return
      }

      console.log('Переключение на альтернативную ссылку')
      // toast.error(
      //   'Проблема с загрузкой видео, возможно из-за проблем с YOUTUBE , используем альтернативное видео'
      // )
      setVideoSource(altVideoLink)
      setLoadingAttempt(0)
    } else {
      toast.error('Не удалось загрузить видео')
    }
  }, [loadingAttempt, toast, currentFilm?.tmdbId])

  const checkVideoPlayability = useCallback(async () => {
    if (!videoRef.current) return

    try {
      await videoRef.current.play()
      videoRef.current.pause()
      setIsloading(false)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    } catch (error) {
      handleVideoError()
    }
  }, [handleVideoError])

  useEffect(() => {
    if (!videoRef.current || !videoSource) return

    const videoElement = videoRef.current

    // Очищаем предыдущий таймаут если он был
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Устанавливаем новый таймаут
    timeoutRef.current = setTimeout(() => {
      checkVideoPlayability()
    }, 2000)

    const handleLoadedData = () => {
      setfilmDuration(videoElement.duration)
      checkVideoPlayability()
    }

    videoElement.addEventListener('loadeddata', handleLoadedData)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      videoElement.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [videoSource, checkVideoPlayability])

  // инициализация источника видео
  // useEffect(() => {
  //   if (currentFilm?.videoLink) {
  //     const cleanUrl = currentFilm.videoLink.startsWith('@')
  //       ? currentFilm.videoLink.slice(1)
  //       : currentFilm.videoLink

  //     try {
  //       new URL(cleanUrl) // проверка валидности URL
  //       setVideoSource(cleanUrl)
  //     } catch {
  //       console.log('Невалидный URL:', cleanUrl)
  //       setVideoSource(altVideoLink)
  //     }
  //   }
  // }, [currentFilm])

  useEffect(() => {
    const initializeVideo = async () => {
      if (currentFilm?.tmdbId) {
        // Предполагая, что у вас есть ID фильма из TMDB
        try {
          const videoUrl = await TMDBService.getMovieVideos(currentFilm?.tmdbId)
          console.log(currentFilm?.tmdbId)
          console.log('videoUrl', videoUrl)
          if (videoUrl) {
            setVideoSource(videoUrl)
            setTmdbVideoLoaded(true)
            console.log('загружено вииииииииииииииидео........................')
          } else {
            setVideoSource(altVideoLink)
            setTmdbVideoLoaded(false)
          }
        } catch {
          setVideoSource(altVideoLink)
        }
      }
    }

    initializeVideo()
  }, [currentFilm])

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
        src={videoSource}
        onError={handleVideoError}
        onTimeUpdate={handlerCurrentTimePlaying}
        onClick={playButtonClick}
      />

      <ButtonPlayerExit />

      <PlayerControls
        onProgressBarClick={handleProgressBarClick}
        onPlayButtonClick={playButtonClick}
        handlerToggleFullScreen={handlerToggleFullScreen}
        isPlaying={isPlaying}
        isShown={!tmdbVideoLoaded}
        progress={playRowPosition || 0}
        remainingTime={Math.floor(filmDuration - currentTimePlaying)}
      />
    </DivPlayerContainer>
  )
}

export default Player
