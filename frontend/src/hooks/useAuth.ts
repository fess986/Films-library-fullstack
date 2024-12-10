import { useCallback, useEffect } from "react";

import { AuthStatus } from "../const/const";
import { useAppDispatch } from "../store";
import { setToken, setUserId } from "../store/user/userSlice";

const storageName = "userData";
export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback((jwtToken: string, id: number) => {
    dispatch(setToken(jwtToken));
    dispatch(setUserId(id));

    localStorage.setItem(storageName, JSON.stringify({
      userId: id,
      token: jwtToken,
    }));
    console.log('login');
  }, []);

  const logout = useCallback(() => {
    dispatch(setToken(null));
    dispatch(setUserId(null));

    localStorage.removeItem(storageName);
  }, []);

  const checkAuth = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}');
    if (data && data.token) {
      login(data.token, data.userId);
      return AuthStatus.AUTH;
    }
    return AuthStatus.NO_AUTH;
  }, []);

  // для обновления состояния приложения
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}');
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);


  return {login, logout, checkAuth};
};