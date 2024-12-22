import {
  BreadcrumbLink,
  BreadcrumbLi,
  BreadcrumbsList,
  NavBreadcrumbs,
} from './styles'
import useActiveFilm from '../../../hooks/useActiveFilm'

const Breadcrumbs: React.FC = () => {
  const { id, currentFilm, isActiveFilmLoaded } = useActiveFilm()

  return !isActiveFilmLoaded || !currentFilm ? null : (
    <>
      <NavBreadcrumbs>
        <BreadcrumbsList>
          <BreadcrumbLi>
            <BreadcrumbLink to={`films/${id}`} $isActive={false}>
              {currentFilm.name}{' '}
            </BreadcrumbLink>
          </BreadcrumbLi>
          <BreadcrumbLi>
            <BreadcrumbLink to={`films/${id}/review`} $isActive={true}>
              Add review
            </BreadcrumbLink>
          </BreadcrumbLi>
        </BreadcrumbsList>
      </NavBreadcrumbs>
    </>
  )
}

export default Breadcrumbs
