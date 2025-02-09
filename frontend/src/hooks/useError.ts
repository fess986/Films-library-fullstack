import { AxiosError } from 'axios'

import createToast from '../utils/toast'

export const useError = (err: AxiosError | Error) => {
  const toast = createToast()

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
