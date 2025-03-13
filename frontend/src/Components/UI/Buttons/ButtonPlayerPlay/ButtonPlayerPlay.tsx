import { ButtonPlayer, SvgIcon } from './styles.ts'

type ButtonPlayerPlayProps = {
  onClick: () => void
  state: 'pause' | 'play'
}

const ButtonPlayerPlay: React.FC<ButtonPlayerPlayProps> = ({
  onClick,
  state = 'pause',
}) => {
  return (
    <ButtonPlayer onClick={onClick}>
      {state === 'play' && (
        <SvgIcon viewBox="0 0 19 19" width={19} height={19}>
          <use xlinkHref="#play-s" />
        </SvgIcon>
      )}

      {state === 'pause' && (
        <SvgIcon viewBox="0 0 14 21" width={14} height={21}>
          <use xlinkHref="#pause" />
        </SvgIcon>
      )}

      <span>Play</span>
    </ButtonPlayer>
  )
}

export default ButtonPlayerPlay
