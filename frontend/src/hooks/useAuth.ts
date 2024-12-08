import { useState, useCallback, useEffect } from "react";

const storageName = "userData";
export const useAuth = () => {


  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  const login = useCallback((jwtToken: string, id: number) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({
      userId: id,
      token: jwtToken,
    }));
    console.log('login');
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}');
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);


  return {login, logout, token, userId};
};