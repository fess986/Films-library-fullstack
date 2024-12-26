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
import useToast from '../../../hooks/useToast.js'
import { registerAction, loginAction } from '../../../store/api-actions.js'
import { getIsDataLoading } from '../../../store/app/appSelectors.js'
import { useAppDispatch } from '../../../store/index.js'

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const toast = useToast()

  const isLoading = useSelector(getIsDataLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {}
      if (!values.email) {
        errors.email = 'введите email'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'не верный формат email'
      }

      if (!values.password) {
        errors.password = 'введите пароль'
      }

      return errors
    },
    onSubmit: (values) => {
      console.log(values) // не используется нативный onSubmit
    },
  })

  // console.log(formik)

  // меняем состояние стейта формы при изменении
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value) // устанавливаем поле в соответствии со значением из инпута
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof typeof formik.errors // приводим тип в соответствии с типом ошибки, чтобы не было проблем с TS

    formik.setFieldTouched(fieldName, true) // устанавливаем значение "тронутости поля при потере фокуса"

    const errorMessage = formik.errors[fieldName]  // получаем строку ошибки

    // если форма невалидна и есть сообщение об ошибке пишем сообщение пользователю
    if (!formik.isValid && errorMessage) {
      toast.error(errorMessage) // Передаем только строку
    }

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

            <SignInFields onChange={onChangeHandler} onBlur={onBlurHandler} />

            <SignInButton loginHandler={loginHandler} isDisabled={isLoading} />

            {!formik.isValid && <div>form is not valid</div>}

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
