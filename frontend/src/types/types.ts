export type FilmProps = {
  id: number // _id из базы
  name: string
  posterImage: string
  previewImage: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string[]
  released: number
  isFavorite: boolean | undefined
  playerImage?: string
  similarFilms?: string[] // id-шники похожих фильмов
  likedByUsers?: string[] // id-шники пользователей, которые лайкнули фильм
}

export type Review = {
  id: number
  user: {
    id: number
    name: string
  }
  rating: number
  comment: string
  date: string
}

export type commentProps = {
  text: string
  rating: number
  filmId: number
  userId: string
}

export type UserInfo = {
  email: string
  password: string
}
