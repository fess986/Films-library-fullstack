import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/index.js";

import { registerAction, loginAction } from "../../../store/api-actions.js";
import { getIsDataLoading } from "../../../store/app/appSelectors.js";

import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";
import RegisterButton from "./RegisterButton/RegisterButton";
import { FormSignIn, DivFormContainerTop, DivFormContainerBottom, SectionFormContainer } from "./styles";

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getIsDataLoading);

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  // меняем состояние стейта формы при изменении
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  // регистрация нового пользователя
  const registerHandler = async () => {
    try {
      dispatch(registerAction({...form}));
    } catch (err) {
      // уже обработаны 
    }
  }

  // вход в аккаунт существующего пользователя
  const loginHandler = async () => dispatch(loginAction({...form}));

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