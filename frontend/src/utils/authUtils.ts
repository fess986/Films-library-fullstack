import { AppDispatch } from "../store";
import { setToken, setUserId, setAuthStatus } from "../store/user/userSlice";
import { resetFilmsShownCount } from "../store/app/appSlice";
import { AuthStatus, storageName } from "../const/const";

export const loginUtil = (
  dispatch: AppDispatch,
  jwtToken: string,
  id: string
): void => {
  // Диспатчим действия в Redux
  console.log('asghdrshtehredg')
  dispatch(setToken(jwtToken));
  dispatch(setUserId(id));
  dispatch(setAuthStatus(AuthStatus.AUTH));

  // Сохраняем данные в localStorage
  localStorage.setItem(
    storageName,
    JSON.stringify({
      userId: id,
      token: jwtToken,
    })
  );
};

export const logoutUtil = (
  dispatch: AppDispatch
): void => {
  dispatch(setToken(null));
  dispatch(setUserId(null));
  dispatch(setAuthStatus(AuthStatus.NO_AUTH))
  dispatch(resetFilmsShownCount());

  localStorage.removeItem(storageName);
};

export const checkAuthUtil = (
  dispatch: AppDispatch,
): AuthStatus => {
  const data = JSON.parse(localStorage.getItem(storageName) || '{}');
  if (data && data.token) {
    loginUtil(dispatch, data.token, data.userId);
    return AuthStatus.AUTH;
  }
  return AuthStatus.NO_AUTH;
};