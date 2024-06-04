import { FilmProps } from "../../../mock/films";

type MainProps = {
  films: FilmProps[];
}

const Main: React.FC<MainProps> = ( {films} ) => {
  console.log(films);
  return <h1>Main</h1>;
};

export default Main;