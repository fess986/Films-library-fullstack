import { Films } from "../../../mock/films";
import { useParams } from "react-router-dom";
import { BreadcrumbLink, BreadcrumbLi, BreadcrumbsList, NavBreadcrumbs } from "./styles";

import { useColorContext } from "../../../context/ColorContext/useColorContext";

const Breadcrumbs: React.FC = () => {
  const { id } = useParams();
  const film = Films[Number(id)];

  const { isDark } = useColorContext();
  console.log(isDark)

  return (
    <>
      <NavBreadcrumbs>
          <BreadcrumbsList>
            <BreadcrumbLi>
              <BreadcrumbLink to={`films/${id}`} >{film.name}</BreadcrumbLink>
            </BreadcrumbLi>
            <BreadcrumbLi>
              <BreadcrumbLink to={`films/${id}/review`} $active>Add review</BreadcrumbLink>
            </BreadcrumbLi>
          </BreadcrumbsList>
        </NavBreadcrumbs>
    </>
  )
}

export default Breadcrumbs;