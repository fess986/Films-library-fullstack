export const getDuration = (runTime: number) : string => {
  if (runTime < 0 ) {
    return '0h 0m';
  }
  return `${Math.floor(runTime / 60)}h ${Math.floor(runTime % 60)}m`;
};