import moment from 'moment'

import { FilmProps } from '../types/types'

export const getDuration = (runTime: number): string => {
  if (runTime < 0) {
    return '0h 0m'
  }
  return `${Math.floor(runTime / 60)}h ${Math.floor(runTime % 60)}m`
}

export const parseCommentDate = (date: string): string => {
  return moment(date).format('MMMM D[,] YYYY')
}

export const formatDate = (date: string) => {
  return moment(date).format('YYYY-MM-DD')
}

// из переданных секунд формируем время в часах, минутах и секундах
export const parseSeconds = (timeInSeconds: number): string => {
  const runtime = timeInSeconds / 60
  let hours: number | string = Math.floor(runtime / 60)
  let minutes: number | string = Math.floor(runtime - hours * 60)
  let seconds: number | string = Math.floor(
    runtime * 60 - hours * 3600 - minutes * 60
  )

  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  hours = hours < 10 ? `0${hours}` : hours

  const parsedTime =
    hours === `00` ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`

  return parsedTime
}

export function shuffleFilms(shuftledFilms: FilmProps[]) {
  // Создаем копию массива, чтобы не изменять оригинал
  const shuffled = [...shuftledFilms]

  // Алгоритм Фишера-Йетса
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Генерируем случайный индекс
    // Меняем местами элементы
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}
