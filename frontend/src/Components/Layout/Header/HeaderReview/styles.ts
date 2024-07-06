import styled from "styled-components";
import { H2 } from "../../../styled/Components";
import { textColorMain, fontH2, blackTextStroke } from "../../../styled/Mixins/mixins";

export const H2FilmTitle = styled(H2)`
  max-width: 750px;
  max-height: 85px;
  overflow: hidden;

  ${textColorMain}
  ${fontH2}
  ${blackTextStroke}
`;

