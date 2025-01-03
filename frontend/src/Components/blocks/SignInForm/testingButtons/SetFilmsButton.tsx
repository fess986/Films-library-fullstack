import { ButtonTest } from './styles'

type ButtonProps = {
  clickHandler: () => void
}

const SetFilmsButton: React.FC<ButtonProps> = ({ clickHandler }) => {
  return <ButtonTest onClick={clickHandler}> Set Films to DB </ButtonTest>
}

export default SetFilmsButton
