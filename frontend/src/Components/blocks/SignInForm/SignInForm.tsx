import SignInMessage from "./SignInMessage/SignInMessage";
import SignInFields from "./SignInFields/SignInFields";
import SignInButton from "./SignInButton/SignInButton";

// type SignInFormProps = {

// }

const SignInForm: React.FC = () => {
  return (
    <section className="sign-in__form-container form-container">
      <div className="form-container--bottom">
        <div className="form-container--top">
          <form action="#" className="sign-in__form sign-in">
            <SignInMessage isError={false}>
              Please sign in if you have an account or sign up if you don’t
            </SignInMessage>

            <SignInFields />

            <SignInButton />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignInForm;