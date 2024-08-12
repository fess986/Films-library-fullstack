type ButtonFullScreenProps = {
  callback: () => void
}

const ButtonFullScreen: React.FC<ButtonFullScreenProps> = ({callback}) => {
  return (
    <button onClick={callback} type="button" className="controls__full-screen-button full-screen-button">
            <svg className="full-screen-button__icon" viewBox="0 0 50 50" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
  )
}

export default ButtonFullScreen;