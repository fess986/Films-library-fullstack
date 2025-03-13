import styled from 'styled-components'

import { StyledLink, Li, Nav, Ul } from '../../styled/Components'
import { fontMedium, textColorMain } from '../../styled/Mixins/mixins'

export const BreadcrumbLink = styled(StyledLink)<{ $isActive?: boolean }>`
  display: inline-block;
  height: ${(props) => props.theme.textSizeMedium};
  max-width: 450px;
  overflow-x: clip;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${fontMedium}
  ${textColorMain}

  transition: transform .5s linear;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.$isActive &&
    `
		color: ${props.theme.textColorMainDark};
		opacity: 0.7;
	`};
`

export const BreadcrumbLi = styled(Li)`
  position: relative;
  display: inline-block;
  max-width: 500px;
  ${textColorMain}

  &:not(:last-child)::after {
    content: '/';
    margin-left: 5px;
    margin-right: 7px;
    @include font-medium;
  }
`

// .breadcrumbs__item {
// 		&--my-list {
// 			color: $text-color-additional;
// 		}

export const BreadcrumbsList = styled(Ul)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

export const NavBreadcrumbs = styled(Nav)`
  margin-left: 20px;
  max-width: 700px;
`
