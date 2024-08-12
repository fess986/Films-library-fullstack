import {DivPorogressContainer, ProgressLine, DivProgressToggler} from "./styles";

type ProgressBarProps = {
  value: number,
  max: number,
  name: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({value, max, name = 'Toggler'}) => {
  return (
    <DivPorogressContainer>
    <ProgressLine value={value} max={max} />
    <DivProgressToggler style={{ left: '30%' }}>{name}</DivProgressToggler>
  </DivPorogressContainer>
  )
}

export default ProgressBar;