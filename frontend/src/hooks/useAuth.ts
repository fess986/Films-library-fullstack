import { useCallback } from "react";
// import { useSelector } from "react-redux";

import { AuthStatus } from "../const/const";
import { useAppDispatch } from "../store";
import { setToken, setUserId } from "../store/user/userSlice";
// import { getToken } from "../store/user/userSelectors";

const storageName = "userData";
export const useAuth = () => {
  const dispatch = useAppDispatch();
  // const [userId, setUserId] = useState<number | null>(null);

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

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem(storageName) || '{}');
  //   if (data && data.token) {
  //     login(data.token, data.userId);
  //   }
  // }, [login]);


  return {login, logout, checkAuth};
};