import React, { useState, useRef, useEffect } from "react";

import Video from "../../UI/Video/Video";
import ButtonPlayerExit from "../../UI/Buttons/ButtonPlayerExit/ButtonPlayerExit";
import PlayerControls from "../../blocks/PlayerControls/PlayerControls";

import useActiveFilm from "../../../hooks/useActiveFilm";

import { FilmProps } from "../../../types/types";
import { DivPlayerContainer } from "./styles";
import { current } from "@reduxjs/toolkit";

type PlayerProps = {
  film: FilmProps
}

const Player: React.FC<PlayerProps> = () => {
  const [isLoading, setIsloading] = useState(true);
  const [isPlaying, setIsPlaing] = useState(false);
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0);
  const [filmDuration, setfilmDuration] = useState(0);
  const [playRowPosition, setPlayRowPosition] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log(videoRef)

  const { currentFilm, isActiveFilmLoaded, id } = useActiveFilm();

// обновляем текущее время видео
  const handlerCurrentTimePlaying = () => {
    if (videoRef.current) {
      setCurrentTimePlaying(videoRef.current.currentTime);
      console.log(currentTimePlaying);
    }
  }

  // получаем длинну видео
  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      setIsloading(false) ;
      console.log('прогрузилось');
      setfilmDuration((current) => {
        if (videoRef.current) {
          // console.log(videoRef.current)
          current = videoRef.current.duration;
          console.log('продолжительность - ', current);
        }
        return current;
      });
    });
  }, []);

  // устанавливаем позицию прогресс бара
  useEffect(() => {
    setPlayRowPosition(currentTimePlaying / filmDuration * 100);
    console.log('playRowPosition - ', playRowPosition);
  }, [currentTimePlaying, filmDuration, playRowPosition]);


  return (
    <DivPlayerContainer>
      <Video
        ref={videoRef}
        poster={currentFilm?.playerImage ? currentFilm?.playerImage : '/images/player-poster.jpg'}
        src={currentFilm?.videoLink}
        // onTimeUpdate={(evt) => { console.log(evt) }}
        onTimeUpdate={handlerCurrentTimePlaying}
        onClick={() => { console.log('нажата кнопка плеера') }}
      />

      <ButtonPlayerExit />

      <PlayerControls />

    </DivPlayerContainer>
  )
};

export default Player;