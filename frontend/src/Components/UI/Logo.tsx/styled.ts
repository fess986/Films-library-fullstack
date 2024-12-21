import styled from "styled-components";

import { Img, StyledLink } from "../../styled/Components";
import { zIndexTop } from "../../styled/Mixins/mixins";
type LogoProps = {
	$footer?: boolean;
};

export const LinkLogo = styled(StyledLink)<LogoProps>`
display: block;
width: 63px;
height: 63px;
border-radius: 50%;
overflow: hidden;
cursor: pointer;

margin-right: ${(props) => (props.$footer  ? "20px" : "0")};

will-change: transform; // говорим браузеру что будет изменяться размер
transition: 0.5s transform, 0.5s -webkit-transform; // задаём время трансформации

&:hover {
${zIndexTop}// для того чтобы изображение перекрывало другие смежные элементы
  transform: scale(1.2); // задаём масштаб трансформирования
`;
export const ImgLogo = styled(Img)`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
