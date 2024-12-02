import { useState } from "react";

import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";
import { FormSignIn, DivFormContainerTop, DivFormContainerBottom, SectionFormContainer } from "./styles";

const SignInForm: React.FC = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
    // console.log(form)
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

          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm;