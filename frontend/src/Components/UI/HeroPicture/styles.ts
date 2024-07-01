import styled from "styled-components";
import { Img } from "../../styled/Components";
import { zIndexBack } from "../../styled/Mixins/mixins";
import { PageList } from "../../../const/const";

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

type ImgHeroProps = {
	$page?: PageList
}

const imgValues: Partial<Record<PageList, { width: string; height: string }>> = {
	[PageList.MAIN]: {
		width: "100%",
		height: "auto",},
	[PageList.ADD_REVIEW]: {
		width: "1200px",
		height: "375px",
	},
};

export const ImgHero = styled(Img).attrs(() => ({
  alt: "Films Library hero image",
}))<ImgHeroProps>`
  width: ${({ $page }) => ($page ? imgValues[$page]?.width || "100%" : "100%")};
  height: ${({ $page }) => ($page ? imgValues[$page]?.height || "auto" : "auto")};
`


