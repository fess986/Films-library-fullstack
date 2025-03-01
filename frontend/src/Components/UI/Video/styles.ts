import styled from 'styled-components'

const commonStyles = `
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const VideoPlayer = styled.video`
  ${commonStyles}
  font-size: 100%;
  font: inherit;
`

export const IframePlayer = styled.iframe`
  ${commonStyles}
  position: absolute;
  top: 0;
  left: 0;
`
