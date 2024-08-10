const PlayerControls: React.FC = () => {
  return (
    <div className="player__controls controls">
        <div className="controls__row">
          <div className="controls__progress progress">
            <progress className="progress__line" value={30} max={100} />
            <div className="progress__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="controls__time-value">1:30:29</div>
        </div>
        <div className="controls__row">
          <button type="button" className="controls__play-button">
            <svg className="controls__play-icon" viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
              {/* <use xlink:href="#pause"></use> */}
            </svg>
            <span>Play</span>
          </button>
          <div className="controls__name">Transpotting</div>
          <button type="button" className="controls__full-screen-button full-screen-button">
            <svg className="full-screen-button__icon" viewBox="0 0 50 50" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
  )
}

export default PlayerControls;