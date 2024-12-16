import { useCallback, useEffect } from "react";

import { AuthStatus, storageName } from "../const/const";
import { useAppDispatch } from "../store";
import { setToken, setUserId } from "../store/user/userSlice";
import { loginUtil } from "../utils/authUtils";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback((jwtToken: string, id: string) => {
    loginUtil(dispatch, jwtToken, id)
  }, [dispatch]);

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