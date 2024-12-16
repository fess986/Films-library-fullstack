import { AppDispatch } from "../store";
import { setToken, setUserId, setAuthStatus } from "../store/user/userSlice";
import { AuthStatus, storageName } from "../const/const";

export const loginUtil = (
  dispatch: AppDispatch,
  jwtToken: string,
  id: string
): void => {
  // Диспатчим действия в Redux
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