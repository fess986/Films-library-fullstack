// type SignInFieldsProps = {

// }

const SignInFields: React.FC = () => {
  return (
    <div className="sign-in__fields">
      <div className="sign-in__field">
        <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
        <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
      </div>
      <div className="sign-in__field">
        <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
        <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
      </div>
    </div>
  )
}

export default SignInFields;