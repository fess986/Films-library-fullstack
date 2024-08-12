type ButtonPlayerPlayProps = {
  callback: () => void
}

const ButtonPlayerPlay: React.FC<ButtonPlayerPlayProps> = ({ callback }) => {
  return (
    <button onClick={callback} type="button" className="controls__play-button">
      <svg className="controls__play-icon" viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
        {/* <use xlink:href="#pause"></use> */}
      </svg>
      <span>Play</span>
    </button>
  )
}

export default ButtonPlayerPlay;