import { css } from "styled-components";

export const sizeH2 = css`
	font-size: ${(props) => props.theme.textSizeH2 || "32"}px;
	line-height: ${(props) => props.theme.textLineHeightH2 || "45"}px;
`;

export const mainFontFamily = css`
	font-family: ${(props) => props.theme.fontFamilyMain};
`;

export const headingFontFamily = css`
	font-family: ${(props) => props.theme.fontFamily};
`;

interface colorProps {
	color?: string;
}

export const textColor = css<colorProps>`
	color: ${(props) => props.color || props.theme.textColorMain};
`;

export const fontSmall = css`
	font-size: ${(props) => props.theme.textSizeSmall || "17"}px;
	line-height: ${(props) => props.theme.textLineHeightSmall || "20"}px;
`;

export const fontMedium = css`
	font-size: ${(props) => props.theme.textSizeMedium || "19"}px;
	line-height: ${(props) => props.theme.textLineHeightMedium || "23"}px;
`;

export const fontBig = css`
	font-size: ${(props) => props.theme.textSizeBig || "25"}px;
	line-height: ${(props) => props.theme.textLineHeightBig || "30"}px;
`;
export const fontH2 = css`
	font-size: ${(props) => props.theme.textSizeH2 || "32"}px;
	line-height: ${(props) => props.theme.textLineHeightH2 || "45"}px;
`;
export const blackTextStroke = css`
	text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
export const yellowTextStroke = css`
	@keyframes pulse {
		0% {
			text-shadow: 0 4px 6px rgba(255, 255, 27, 0.7);
		}
		50% {
			text-shadow: 0 3px 4px rgba(255, 255, 27, 0.7),
				0 6px 10px rgba(255, 165, 0, 0.7);
		}
		100% {
			text-shadow: 0 4px 6px rgba(255, 255, 27, 0.7);
		}
	}
	animation: pulse 1s infinite;
`;

export const whiteTextStroke = css`
	@keyframes pulse {
		0% {
			text-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
		}
		50% {
			text-shadow: 0 0 50px rgba(255, 255, 255, 0.9);
		}
		100% {
			text-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
		}
	}
	animation: pulse 1s infinite;
`;

export const zIndexBack = css`
  z-index: 0;
`;

export const zIndexFront = css`
  z-index: 1;
`;

export const zIndexMiddle = css`
  z-index: 2;
`;

export const zIndexTop = css`
  z-index: 3;
`;

