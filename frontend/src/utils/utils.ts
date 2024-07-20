import moment from "moment";

export const getDuration = (runTime: number) : string => {
  if (runTime < 0 ) {
    return '0h 0m';
  }
  return `${Math.floor(runTime / 60)}h ${Math.floor(runTime % 60)}m`;
};

export const parseCommentDate = (date: string): string => {
  return moment(date).format('MMMM DD[,] YYYY');
};

export const formatDate = (date: string) => {
  return moment(date).format('YYYY-MM-DD');
}

