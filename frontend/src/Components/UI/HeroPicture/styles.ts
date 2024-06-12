import styled from "styled-components";
import { Img } from "../../styled/Components/Img/Img";
import { zIndexBack } from "../../styled/Mixins/mixins";

export const PictureHero = styled.picture`
	position: absolute;
	top: 0;
	left: 0;
  ${zIndexBack}

  &::after {
  content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	// наложение маски-затемнения для более контрастного отображения текста на картинке
	background-color: rgba(0, 0, 0, 0.3);
  }
`

export const SourceWebpHero = styled.source.attrs(() => ({
  type: "image/webp",
}))``

export const ImgHero = styled(Img).attrs(() => ({
  alt: "Films Library hero image",
}))`
  width: 100%;
  height: auto
`


