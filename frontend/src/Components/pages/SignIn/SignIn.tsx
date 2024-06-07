const SignIn: React.FC = () => {
  return (
    <>
      <h2 className="sign-in__title title">Sign in</h2>

      <section className="sign-in__form-container form-container">
        <div className="form-container--bottom">
          <div className="form-container--top">
            <form action="#" className="sign-in__form sign-in">
              <p className="sign-in__message-text message-text message-text--normal">
                Please sign in if you have an account or sign up if you don’t
              </p>
              {/* <p class="sign-in__message-text message-text message-text--error">
								We can’t recognize this email and password combination. Please
								try again.
							</p> */}
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
              <button className="more-films__button sign-in__button" type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};

export default SignIn;