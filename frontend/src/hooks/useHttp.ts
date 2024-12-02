import { useCallback, useState } from "react";

export const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback( async ( url : string, method = "GET", body : any = null, headers = {}) => {
		setIsLoading(true);
		setError(null);
		try {

      const response = await fetch(url, {
        method, body, headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Что то пошло не так при запросе");  // текст ошибки или строка или то что прислано в поле message, пришедшее с бека
      } else {
        setIsLoading(false);
        return data;
      }

		} catch (err: any) {
			setIsLoading(false);
			setError(err.message || "Something went wrong");
      throw err;
		}
	}, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

	return { isLoading, error, sendRequest, clearError };
};
