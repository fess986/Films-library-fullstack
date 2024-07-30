import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";
import { FormSignIn, DivFormContainerTop, DivFormContainerBottom, SectionFormContainer } from "./styles";

// type SignInFormProps = {

// }

const SignInForm: React.FC = () => {
  return (
    <SectionFormContainer>
      <DivFormContainerBottom>
        <DivFormContainerTop>
          <FormSignIn action="#">
            <SignInMessage isError={false}>
              Please sign in if you have an account or sign up if you don’t
            </SignInMessage>

            <SignInFields />

            <SignInButton />
          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm;