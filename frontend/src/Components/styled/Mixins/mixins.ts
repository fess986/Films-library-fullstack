import { css } from "styled-components";

export const sizeH2 = css`
  font-size: ${(props) => props.theme.textSizeH2 || "32"}px;
  line-height: ${(props) => props.theme.textLineHeightH2 || "45"}px;
`