import axios from "axios";

const baseURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; // используем по умолчанию localhost с текущим портом на котором запущен сервер

const api = axios.create({
	baseURL,
	timeout: 1000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Имитация загрузки фильмов через инстанс axios
api.interceptors.response.use(
	(response) => {
		// console.log(response);
		// Имитация задержки в 500 мс
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(response);
			}, 1000);
		});
	},
	(error) => {
		// Здесь можно обработать ошибки глобально
		console.error("Axios error:", error);
		return Promise.reject(error); // если не возвращаем ошибку, то скрипт дальше не идёт
	}
);

// Перехватываем запросы с имитацией возврата данных. Проблема в том что тут нужно прописывать полностью сигнатуру ответа
api.interceptors.request.use(async (config) => {
	if (config.url === "/films" && config.method === "get") {
		// console.log('запрос перехвачен')
		// console.log(config)
		// console.log('запрос перехвачен')
		// return new Promise((resolve) => {
		//   console.log('запрос перехвачен 2 раз')
		//   setTimeout(() => {
		//     resolve({
		//       data: 'films',
		//       status: 200,
		//       statusText: 'OK',
		//       headers: new AxiosHeaders(), // Здесь можно указать заголовки, если нужно
		//       config, // Возвращаем оригинальную конфигурацию
		//       request: {}, // Можно оставить пустым или указать объект запроса
		//     });
		//   }, 1000); // Имитация задержки
		// });
		return config;
	}
	return config; // Возвращаем оригинальный запрос, если не совпадает
});

// Обработка ошибок
// api.interceptors.response.use(
//   response => response,
//   error => {
//     // Здесь можно обработать ошибки глобально
//     console.error('Axios error:', error);
//     return Promise.reject(error);  // если не возвращаем ошибку, то скрипт дальше не идёт
//   }
// );

export default api;
