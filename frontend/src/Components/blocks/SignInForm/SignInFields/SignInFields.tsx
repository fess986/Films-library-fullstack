import { DivSignInFields, DivSignInField, DivSignInInputEmail, DivSignInInputPass } from "./styles";
import { DivHidden } from "../../../styled/Components";
const SignInFields: React.FC = () => {
  return (
    <DivSignInFields>
      <DivSignInField>
        <DivSignInInputEmail name="user-email" id="user-email">
        </DivSignInInputEmail>
        <DivHidden as={"label"} htmlFor="user-email">Email address</DivHidden>
      </DivSignInField>
      <div className="sign-in__field">
        <DivSignInInputPass name="user-password" id="user-password" />
        <DivHidden as={"label"} htmlFor="user-password">Password</DivHidden>
      </div>
    </DivSignInFields>
  )
}

export default SignInFields;