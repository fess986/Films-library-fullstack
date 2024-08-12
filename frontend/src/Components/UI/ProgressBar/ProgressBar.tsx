type ProgressBarProps = {
  value: number,
  max: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({value, max}) => {
  return (
    <div className="controls__progress progress">
    <progress className="progress__line" value={value} max={max} />
    <div className="progress__toggler" style={{ left: '30%' }}>Toggler</div>
  </div>
  )
}

export default ProgressBar;