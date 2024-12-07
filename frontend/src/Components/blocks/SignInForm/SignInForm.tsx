import { useState } from "react";

import { useHttp } from "../../../hooks/useHttp";

import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";
import RegisterButton from "./RegisterButton/RegisterButton";
import { FormSignIn, DivFormContainerTop, DivFormContainerBottom, SectionFormContainer } from "./styles";

const SignInForm: React.FC = () => {

  const { sendRequest, error, isLoading } = useHttp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const registerHandler = async () => {
    try {
      console.log('отправляем запрос');
      const data = await sendRequest("http://localhost:4000/api/auth/register", "POST", {...form});
      // const data = await sendRequest("/api/auth/register", "POST", {...form});
      console.log('Data - ',data);
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <SectionFormContainer>
      <DivFormContainerBottom>
        <DivFormContainerTop>
          <FormSignIn action="#">
            
            <SignInMessage isError={false}>
              Please sign in if you have an account or sign up if you don’t
            </SignInMessage>

            <SignInFields onChange={onChangeHandler} />

            <SignInButton />

            <RegisterButton registerHandler={registerHandler} isDisabled={isLoading} />

          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm;