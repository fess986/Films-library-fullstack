import styled from "styled-components";
import { Button } from "../../../styled/Components";
import {
	zIndexMiddle,
	fontSmall,
	textColorMain,
} from "../../../styled/Mixins/mixins";

export const ButtonExit = styled(Button).attrs(() => ({
  type: "button",
}))`
	position: absolute;
	top: 37px;
	right: 32px;

	display: block;
	${zIndexMiddle}
	${fontSmall}
  ${textColorMain}

  background: 0 0;

	border: none;
	border-radius: 8px;

	padding: 10px 20px;
	width: 93px;

	cursor: pointer;

	transition: transform 0.3s linear;

	&:hover {
		transform: scale(1.1);
	}
`;
