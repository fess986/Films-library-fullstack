import SignInForm from "../../blocks/SignInForm/SignInForm";
import { H2SignIn } from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <H2SignIn>Sign in</H2SignIn>
      <SignInForm />
    </>
  )
};

export default SignIn;