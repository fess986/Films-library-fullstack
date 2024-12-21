import styled from "styled-components";

import { StyledLink, Li } from "../../styled/Components";
import { fontBig, textColorMain, blackTextStroke } from "../../styled/Mixins/mixins";

type LinkFilmMenuItemProps = {
  $active: boolean
}

export const LinkFilmMenuItem = styled(StyledLink)<LinkFilmMenuItemProps>`
	display: inline-block;

	min-height: 35px;
	font-weight: 700;

  ${props => props.$active && `
    border-bottom: 2px solid ${props.theme.textColorMain};
  `}

  ${fontBig}
  ${textColorMain}
  ${blackTextStroke}
`

export const LiFilmMenuItem = styled(Li)`
	position: relative;
	display: inline-block;
	min-width: 80px;
	max-width: 250px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-right: 20px;

	&:nth-last-child(1) {
		margin-right: 0;
	}
`