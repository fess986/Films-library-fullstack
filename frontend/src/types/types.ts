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
}