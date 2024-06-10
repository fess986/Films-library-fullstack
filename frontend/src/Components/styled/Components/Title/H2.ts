import styled from "styled-components";
import { sizeH2 } from "../../Mixins/mixins";

interface H2Props {
  size?: string;
}

export const H2 = styled.h2<H2Props>`
  ${sizeH2}
  
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  color: ${(props) => props.theme.textColorMain};

  max-width: 750px;
  max-height: 85px;
  overflow: hidden;
`;

// font-size: ${(props) => props.size || "32"}px;
//   line-height: 45px;