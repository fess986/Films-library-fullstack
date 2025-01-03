import { ButtonTest } from "./styles"

type RegisterButtonProps = {
  clickHandler: () => void
}

const GetFilmsButton: React.FC<RegisterButtonProps> = ({
  clickHandler
}) => {
  return (
    <ButtonTest onClick={clickHandler} >
      {' '}
      Get Films from DB{' '}
    </ButtonTest>
  )
}

export default GetFilmsButton
