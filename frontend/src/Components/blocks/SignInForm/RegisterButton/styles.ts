import styled from "styled-components";
import { Button } from "../../../styled/Components";
import { textColorAdditional } from "../../../styled/Mixins/mixins";

export const ButtonRegister = styled(Button).attrs(() => ({
  type: "submit",
}))`
	display: block;

	text-align: center;
	width: 100%;
	padding: 29px 40px;
  margin-bottom: 30px;
  
	background: none;
	border: 1px solid rgba(44, 43, 39, 0.2);
	border-radius: 8px;

	transition: border-color 0.5s;

	font-size: 22px;
	line-height: 26px;
  ${textColorAdditional};

  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.textColorAdditional}; }

`;
