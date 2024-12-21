import styled from "styled-components";

import { Ul, Li } from "../../styled/Components";
import {
	whiteTextStroke,
	blackTextStroke,
	textColorMain,
	textColorMainDark,
} from "../../styled/Mixins/mixins";

export const UserBlockItem = styled(Li)`
	margin-right: 20px;
	&:last-child {
		margin-right: 10;
	}
`;

type UserBlockProps = {
	$dark?: boolean;
};

export const UserBlockText = styled(UserBlockItem)<UserBlockProps>`
	font-size: 20px;
	line-height: 24px;
	font-weight: 500;
  ${textColorMainDark}
	${blackTextStroke}

	transition: 0.5s color;

  ${(props) =>
		props.$dark && {
			color: props.theme.textColorAdditional,
			textShadow: "none",
		}}

  &:hover {
    ${(props) => {
			if (props.$dark) {
				return textColorMain;
			} else {
				return whiteTextStroke;
			}
		}}
	}
  }}
`;

export const UserBlockUl = styled(Ul)`
  display: flex;
  align-items: center;
  cursor: pointer;
  `
