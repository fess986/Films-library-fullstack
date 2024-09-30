import { StoreNames } from "../../const/const";
import { RootState } from "../index";


export const getIsAuth = (state: RootState) => state[StoreNames.User].isAuth;