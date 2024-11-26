import { DivPorogressContainer, ProgressLine, DivProgressToggler } from "./styles";

type ProgressBarProps = {
  value: number,
  max: number,
  name: string,
  onClick: (value: number) => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, name = 'Toggler', onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    const { left, width } = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clickPosition = clientX - left; // Позиция клика относительно полосы прогресса
    const newValue = (clickPosition / width) * max; // Новое значение прогресса
    onClick(newValue); // Вызываем функцию для обновления времени
  };

  return (
    
    <DivPorogressContainer onClick={handleClick}>
      <ProgressLine value={value} max={max} />
      <DivProgressToggler style={{ left: `${value}%` }}>{name}</DivProgressToggler>
    </DivPorogressContainer>
  )
}

export default ProgressBar;