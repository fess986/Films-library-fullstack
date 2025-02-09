import { toast } from 'react-toastify'

const createToast = () => {
  const initSettings = {
    autoClose: 3000,
    closeOnClick: true,
  }

  return {
    success: (message: string) => toast.success(message, initSettings),
    error: (message: string) => toast.error(message, initSettings),
    info: (message: string) => toast.info(message, initSettings),
  }
}

export default createToast
