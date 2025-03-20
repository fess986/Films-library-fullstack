export type FilmProps = {
  id: string // _id из базы
  name: string
  localizedName?: string
  posterImage: string
  previewImage: string
  videoLink?: string
  tmdbId?: number
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
  id: string
  userId: string
  userName: string
  filmId: string
  rating: number
  commentText: string
  date: string
}

export type fetchedReview = {
  _id: string
  userId: string
  userName: string
  filmId: string
  rating: number
  commentText: string
  date: string
}

export type commentProps = {
  text: string
  rating: number
  filmId: string
  userId: string
  date: string
}

export type UserInfo = {
  email: string
  password: string
}
