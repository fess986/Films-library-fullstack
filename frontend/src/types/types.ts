export type FilmProps = {
  id: number,
  name: string;
  posterImage: string;
  previewImage: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime:number;
  genre: string[];
  released: number;
  isFavorite: boolean;
  playerImage?: string;
  similarFilms?: number[]
}

export type Review = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

export type commentProps = {
  text: string,
  rating: number,
  filmId: number,
  userId: string
};

export type UserInfo = {
  email: string
  password: string,
}