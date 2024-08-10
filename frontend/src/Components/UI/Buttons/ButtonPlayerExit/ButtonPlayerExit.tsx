type ButtonPlayerExitProps = {
  callback: () => void,
}

const ButtonPlayerExit: React.FC<ButtonPlayerExitProps> = ({callback}) => {
  return (
    <button type="button" className="player__exit-button exit-button" onClick={callback}>Exit</button>
  )
}

export default ButtonPlayerExit;