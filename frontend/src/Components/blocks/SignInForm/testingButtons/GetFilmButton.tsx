import { ButtonTest } from './styles'

type ButtonProps = {
  clickHandler: () => void
}

const GetFilmsButton: React.FC<ButtonProps> = ({ clickHandler }) => {
  return <ButtonTest onClick={clickHandler}> Get Films from DB </ButtonTest>
}

export default GetFilmsButton
