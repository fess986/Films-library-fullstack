import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import { useSelector } from 'react-redux'
import { z } from 'zod'

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
import GetFilmsButton from './testingButtons/GetFilmButton'
import SetFilmsButton from './testingButtons/SetFilmsButton'
import useToast from '../../../hooks/useToast.js'
import {
  registerAction,
  loginAction,
  fetchFilmsDB,
  setFilmsDB
} from '../../../store/api-actions.js'
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
    validate: withZodSchema(
      z.object({
        email: z
          .string()
          .email()
          .regex(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message: 'не верный формат email',
          })
          .min(1, { message: 'введите email' }),
        password: z.string().min(1, { message: 'введите пароль' }),
      })
    ),
    // нативная валидация без использования пакета zod
    // validate: (values) => {
    //   const errors: Partial<typeof values> = {}
    //   if (!values.email) {
    //     errors.email = 'введите email'
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'не верный формат email'
    //   }

    //   if (!values.password) {
    //     errors.password = 'введите пароль'
    //   }

    //   return errors
    // },
    onSubmit: (values) => {
      console.log(values) // не используется нативный onSubmit
    },
  })

  // меняем состояние стейта формы при изменении
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value) // устанавливаем поле в соответствии со значением из инпута
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof typeof formik.errors // приводим тип в соответствии с типом ошибки, чтобы не было проблем с TS

    formik.setFieldTouched(fieldName, true) // устанавливаем значение "тронутости поля при потере фокуса"

    const errorMessage = formik.errors[fieldName] // получаем строку ошибки

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

  const getFilmsHandler = async () => {
    console.log('Get Films From DB...')
    dispatch(fetchFilmsDB())
  }

  const setFilmsHandler = async () => {
    console.log('Set Films to DB...')
    dispatch(setFilmsDB())
  }

  return (
    <SectionFormContainer>
      <DivFormContainerBottom>
        <DivFormContainerTop>
          <FormSignIn onSubmit={(e) => e.preventDefault()}>
            <SignInMessage isError={!formik.isValid}>
              Please sign in if you have an account or sign up if you don’t
            </SignInMessage>

            <SignInFields onChange={onChangeHandler} onBlur={onBlurHandler} />

            <SignInButton loginHandler={loginHandler} isDisabled={isLoading} />

            <RegisterButton
              registerHandler={registerHandler}
              isDisabled={isLoading}
            />

            <GetFilmsButton clickHandler={getFilmsHandler} />
            <SetFilmsButton clickHandler={setFilmsHandler} />
          </FormSignIn>
        </DivFormContainerTop>
      </DivFormContainerBottom>
    </SectionFormContainer>
  )
}

export default SignInForm
