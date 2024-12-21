// // старший вариант fetch-запросов по сети. Оставляю для наглядности для сравнения с новым вариантом api axios

// import { useCallback, useState } from "react";

// export const useHttp = () => {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	const sendRequest = useCallback( async ( url : string, method = "GET", body : any = null, headers : any = {}) => {
// 		setIsLoading(true);
// 		setError(null);
// 		try {
//       if (body) {
//         body = JSON.stringify(body);
//         headers["Content-Type"] = "application/json";
//       }

//       const response = await fetch(url, {
//         method, body, headers,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // throw new Error(data.message || "Что то пошло не так при запросе");  // текст ошибки или строка или то что прислано в поле message, пришедшее с бека

//         const errorMessage = data.errors && Array.isArray(data.errors) && data.errors.length
//         ? data.errors.map((err: { msg: string }) => err.msg).join(", ")
//         : data.message || "Что-то пошло не так при запросе";

//       throw new Error(errorMessage);


//       } else {
//         setIsLoading(false);
//         return data;
//       }

// 		} catch (err: any) {
//       console.log(err);
//       // console.log(err.errors);
      
// 			setIsLoading(false);
// 			setError(err.message || "Something went wrong");
//       throw err;
// 		}
// 	}, []);

//   const clearError = useCallback(() => {
//     setError(null);
//   }, []);

// 	return { isLoading, error, sendRequest, clearError };
// };