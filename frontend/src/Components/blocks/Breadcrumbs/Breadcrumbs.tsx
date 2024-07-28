import { Films } from "../../../mock/films";
import { useParams } from "react-router-dom";
import { BreadcrumbLink, BreadcrumbLi, BreadcrumbsList, NavBreadcrumbs } from "./styles";

const Breadcrumbs: React.FC = () => {
  const { id } = useParams();
  const film = Films[Number(id)];

  return (
    <>
      <NavBreadcrumbs>
          <BreadcrumbsList>
            <BreadcrumbLi>
              <BreadcrumbLink to={`films/${id}`} $isActive={false}>{film.name}  </BreadcrumbLink>
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