import styled from "styled-components";
import { Img } from "../../styled/Components/Img/Img";
import { Div } from "../../styled/Components/Div/Div";

export const ImgUserAvatar = styled(Img).attrs(() => ({
	alt: "User avatar",
	// src: props.src,  // оправдываем передачу пропсов, но это не обязательно
}))`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
export const DivUserAvatar = styled(Div)`

	width: 63px;
	height: 63px;
	border-radius: 50%;
	overflow: hidden; // для того чтобы обрезалось кружком

	will-change: transform;
	transition: 0.5s transform, 0.5s -webkit-transform;
  
	&:hover {
		transform: scale(1.2);
	}
`


// .user-avatar {
// 	width: 63px;
// 	height: 63px;
// 	border-radius: 50%;
// 	overflow: hidden; // для того чтобы обрезалось кружком

// 	will-change: transform;
// 	transition: 0.5s transform, 0.5s -webkit-transform;
// 	&:hover {
// 		transform: scale(1.2);
// 	}
// }