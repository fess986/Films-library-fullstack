import { Films } from "../../../mock/films";
import { useParams } from "react-router-dom";
import { BreadcrumbLink, BreadcrumbLi, BreadcrumbsList, NavBreadcrumbs } from "./styles";
import { useSelector } from "react-redux";
import { getFilmList } from "../../../store/films/filmsSelector";

const Breadcrumbs: React.FC = () => {
  const { id } = useParams();
  const films = useSelector(getFilmList);
  const activeFilm = films.find((film) => film.id === Number(id)) || null;

  return (
    !activeFilm ? null :

    <>
      <NavBreadcrumbs>
          <BreadcrumbsList>
            <BreadcrumbLi>
              <BreadcrumbLink to={`films/${id}`} $isActive={false}>{activeFilm.name}  </BreadcrumbLink>
            </BreadcrumbLi>
            <BreadcrumbLi>
              <BreadcrumbLink to={`films/${id}/review`} $isActive={true}>Add review</BreadcrumbLink>
            </BreadcrumbLi>
          </BreadcrumbsList>
        </NavBreadcrumbs>
    </>
  )
}

export default Breadcrumbs;