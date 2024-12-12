import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Создаем экземпляр Axios
const api = axios.create({
  headers: {
    "Content-Type": "application/json", // Стандартные заголовки
  },
  timeout: 5000, // Таймаут запроса (в миллисекундах)
});

// Типизация для запросов
export interface ApiError {
  message: string;
  errors?: { msg: string }[];
}

// Настраиваем перехватчик запросов (если нужно добавить токен или другие заголовки)
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Пример: добавление токена авторизации
    // const token = localStorage.getItem("token");
    // if (token) {
    //   if (config.headers) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Настраиваем перехватчик ответов (для обработки ошибок)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiError>) => {
    let errorMessage = "Произошла ошибка при запросе";
    console.log(error);

    if (error.response) {
      console.log(error.response);
      // Сервер вернул ответ с ошибкой
      const { data } = error.response;

      if (data && data.errors && Array.isArray(data.errors)) {
        errorMessage = data.errors.map((err) => err.msg).join(", ");
        console.log(errorMessage);
      } else if (data && data.message) {
        errorMessage = data.message;
      }
    } else if (error.request) {
      // Запрос был отправлен, но ответа не получено
      errorMessage = "Сервер не отвечает. Проверьте подключение к сети.";
    } else {
      // Что-то пошло не так при настройке запроса
      errorMessage = error.message;
    }

    console.error("API Error:", errorMessage);
    return Promise.reject(new Error(errorMessage));
  }
);

export default api;
