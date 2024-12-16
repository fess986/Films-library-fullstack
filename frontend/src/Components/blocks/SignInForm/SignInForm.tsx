import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useError } from "../../../hooks/useError.js";
import { useAppDispatch } from "../../../store/index.js";

// import { useHttp } from "../../../hooks/useHttp";
// import { useApi } from "../../../hooks/useApi";
import { useAuth } from "../../../hooks/useAuth";
import { ApiRoutes } from "../../../../../const/const.js";
import api from "../../../api/api.js";
import { registerAction } from "../../../store/api-actions.js";
import { getIsDataLoading } from "../../../store/app/appSelectors.js";

import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";
import RegisterButton from "./RegisterButton/RegisterButton";
import { FormSignIn, DivFormContainerTop, DivFormContainerBottom, SectionFormContainer } from "./styles";

const baseURL = import.meta.env.VITE_BASE_URL;

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();

  // const { isLoading } = useApi();
  const isLoading = useSelector(getIsDataLoading);
  console.log(isLoading)

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const { login } = useAuth();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, { autoClose: 3000, closeOnClick: true });
  //     console.log(error);
  //   }
  //   clearError();
  // }, [error, clearError])

  // const registerHandler = async () => {
  //   try {
  //     // const data = await sendRequest(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, "POST", {...form});
  //     const data = await api.post(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.REGISTER}`, {...form});  // отправляем запрос через axios
  //     toast.success('Регистрация прошла успешно', { autoClose: 3000, closeOnClick: true });
  //   } catch (err) {
  //     useError(err as AxiosError | Error);
  //   }
  // }

  const registerHandler = async () => {
    try {
      dispatch(registerAction({...form}));
    } catch (err) {
      // useError(err as AxiosError | Error);
    }
  }

  const loginHandler = async () => {
    try {
      console.log('отправляем запрос');
      // const data = await sendRequest(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, "POST", {...form});
      dispatch(registerAction({...form}));

      const data : {token: string, userId: number}  = await api.post(`${baseURL}${ApiRoutes.AUTH}${ApiRoutes.LOGIN}`, {...form});
      console.log('Data - ',data);


      login(data.token, data.userId);

      toast.success('Вы успешно залогинились', { autoClose: 3000, closeOnClick: true });
    } catch (err) {
      useError(err as AxiosError | Error);
    }
  }

  return (
    <SectionFormContainer>
      <DivFormContainerBottom>
        <DivFormContainerTop>
          <FormSignIn onSubmit={(e) => e.preventDefault()}>
            
            <SignInMessage isError={false}>
              Please sign in if you have an account or sign up if you don’t
            </SignInMessage>

            <SignInFields onChange={onChangeHandler} />

            <SignInButton loginHandler={loginHandler} isDisabled={isLoading} />

            <RegisterButton registerHandler={registerHandler} isDisabled={isLoading} />

          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm;