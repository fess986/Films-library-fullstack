import { AxiosError } from 'axios'

import useToast from './useToast'
export const useError = (err: AxiosError | Error) => {
  const toast = useToast()

  if (err instanceof AxiosError) {
    const serverMessage =
      err.response?.data?.message || 'Ошибка на стороне сервера'
    toast.error(serverMessage)
  } else if (err instanceof Error) {
    toast.error(err.message)
  } else {
    toast.error('Неизвестная ошибка')
  }
}
