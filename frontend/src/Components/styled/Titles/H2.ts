import styled from "styled-components";

interface H2Props {
  size?: string;
}

export const H2 = styled.h2<H2Props>`
  font-size: ${(props) => props.size || "32"}px;
  line-height: 45px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: #ffff1b;

  max-width: 750px;
  max-height: 85px;
  overflow: hidden;
`;

