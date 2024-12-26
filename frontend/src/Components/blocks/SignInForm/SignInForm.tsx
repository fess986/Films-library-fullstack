import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

import RegisterButton from './RegisterButton/RegisterButton'
import SignInButton from './SignInButton/SignInButton'
import SignInFields from './SignInFields/SignInFields'
import SignInMessage from './SignInMessage/SignInMessage'
import {
  FormSignIn,
  DivFormContainerTop,
  DivFormContainerBottom,
  SectionFormContainer,
} from './styles'
import { registerAction, loginAction } from '../../../store/api-actions.js'
import { getIsDataLoading } from '../../../store/app/appSelectors.js'
import { useAppDispatch } from '../../../store/index.js'

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getIsDataLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  console.log(formik)

  // меняем состояние стейта формы при изменении
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }

  // регистрация нового пользователя
  const registerHandler = async () => {
    try {
      dispatch(registerAction({ ...formik.values }))
    } catch (err) {
      // уже обработаны
    }
  }

  // вход в аккаунт существующего пользователя
  const loginHandler = async () => {
    dispatch(loginAction({ ...formik.values }))
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

            <RegisterButton
              registerHandler={registerHandler}
              isDisabled={isLoading}
            />
          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm
