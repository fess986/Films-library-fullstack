import axios from 'axios'

const baseURL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}` // используем по умолчанию localhost с текущим портом на котором запущен сервер

console.log('baseURL axios', baseURL) // не используется

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Имитация загрузки фильмов через инстанс axios
api.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Имитация задержки в 500 мс
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 500)
    })
  },
  (error) => {
    // Здесь можно обработать ошибки глобально
    console.error('Axios error:', error)
    return Promise.reject(error) // если не возвращаем ошибку, то скрипт дальше не идёт
  }
)

// api.interceptors.response.use(
//   (response) => {
// 		console.log('мы тууууууууууууууууут1111111111111')
//     // Проверяем метод и URL запроса
//     if (response.config.method === "post" && response.config.url === ApiRoutes.ADD_FAVORITE_FILM) {
// 			console.log('мы тууууууууууууууууут222222222222222222')
//       // Возвращаем заглушку данных для POST-запроса на /films/add-favorite
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve({
//             ...response,
//             data: { success: true, filmId: response.config.data.filmId }, // Указываем заглушку данных
//           });
//         }, 1000);
//       });
//     }

//     // Обработка остальных запросов с задержкой
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(response);
//       }, 1000);
//     });
//   },
//   (error) => {
//     console.error("Axios error:", error);
//     return Promise.reject(error);
//   }
// );

// Перехватываем запросы с имитацией возврата данных. Проблема в том что тут нужно прописывать полностью сигнатуру ответа
// api.interceptors.request.use(async (config) => {
// 	console.log('ловим запрос')
// 	// if (config.url === "/films" && config.method === "get" )  {
// 	// if (config.url === "/films" && config.method === "get"  )  {
// 	// 	// console.log('запрос перехвачен')
// 	// 	// console.log(config)
// 	// 	// console.log('запрос перехвачен')
// 	// 	// return new Promise((resolve) => {
// 	// 	//   console.log('запрос перехвачен 2 раз')
// 	// 	//   setTimeout(() => {
// 	// 	//     resolve({
// 	// 	//       data: 'films',
// 	// 	//       status: 200,
// 	// 	//       statusText: 'OK',
// 	// 	//       headers: new AxiosHeaders(), // Здесь можно указать заголовки, если нужно
// 	// 	//       config, // Возвращаем оригинальную конфигурацию
// 	// 	//       request: {}, // Можно оставить пустым или указать объект запроса
// 	// 	//     });
// 	// 	//   }, 1000); // Имитация задержки
// 	// 	// });
// 	// 	return config;
// 	// }

// 	if (config.method === "post" && config.url === '/api') {
// 		console.log('мы тууууууууууууууууу4444444444')
// 		// Создаем объект заглушки ответа
// 		const fakeResponse = {
// 			status: 200,
// 			statusText: "OK",
// 			headers: new AxiosHeaders(),
// 			// data: { success: true, filmId: config.data.filmId }, // Возвращаем `filmId`, как при успешном запросе
// 			data: { success: true }, // Возвращаем `filmId`, как при успешном запросе
// 			config,
// 		};

// 		// Возвращаем Promise.resolve(fakeResponse) для имитации успешного выполнения
// 		return Promise.resolve(fakeResponse);
// 	}

// 	return config; // Возвращаем оригинальный запрос, если не совпадает
// });

// Обработка ошибок
// api.interceptors.response.use(
//   response => response,
//   error => {
//     // Здесь можно обработать ошибки глобально
//     console.error('Axios error:', error);
//     return Promise.reject(error);  // если не возвращаем ошибку, то скрипт дальше не идёт
//   }
// );

export default api
