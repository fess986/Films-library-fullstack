import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const useError = (err : AxiosError | Error) => {
  if (err instanceof AxiosError) {
    const serverMessage = err.response?.data?.message || 'Ошибка на стороне сервера';
    toast.error(serverMessage, { autoClose: 3000, closeOnClick: true });
  } else if (err instanceof Error) {
    toast.error(err.message, { autoClose: 3000, closeOnClick: true });
  } else {
    toast.error('Неизвестная ошибка', { autoClose: 3000, closeOnClick: true });
  }
};