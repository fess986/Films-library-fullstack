import {ButtonPlayer, SvgIcon} from './styles.ts'

type ButtonPlayerPlayProps = {
  callback: () => void
}

const ButtonPlayerPlay: React.FC<ButtonPlayerPlayProps> = ({ callback }) => {
  return (
    <ButtonPlayer onClick={callback} >
      <SvgIcon viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
        {/* <use xlink:href="#pause"></use> */}
      </SvgIcon>
      <span>Play</span>
    </ButtonPlayer>
  )
}

export default ButtonPlayerPlay;