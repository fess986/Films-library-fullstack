import styled from "styled-components";
import { Li, StyledLink } from "../../styled/Components";
import { fontMedium, textColorAdditional } from "../../styled/Mixins/mixins";

export const LiGenresListItem = styled(Li)`
	position: relative;
	display: inline-block;

	min-width: 80px;
	max-width: 250px;
	padding: 0 10px;

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

type LinkGenresListItemProps = {
	$active?: boolean;
};

export const LinkGenresListItem = styled(StyledLink)<LinkGenresListItemProps>`
	display: block;
	${fontMedium}
	${textColorAdditional}
	will-change: transform;
	transition: transform 0.2s linear;
	padding-bottom: 8px; // для того чтобы оттолкнуть элемент вниз
	margin-bottom: 1px; // для того чтобы элемент не резался при скейле

	&:hover {
		transform: scale(1.1);
	}

	${({ $active }) =>
		$active &&
		`
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      bottom: 0;
      background: red;
    }
  `}
`;
