import {
  DivSignInFields,
  DivSignInField,
  DivSignInInputEmail,
  DivSignInInputPass,
} from './styles'
import { DivHidden } from '../../../styled/Components'

type SignInFieldsProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SignInFields: React.FC<SignInFieldsProps> = ({ onChange }) => {
  return (
    <DivSignInFields>
      <DivSignInField>
        <DivSignInInputEmail
          name="email"
          id="user-email"
          onChange={(e) => onChange(e)}
          autoFocus
        ></DivSignInInputEmail>
        <DivHidden as={'label'} htmlFor="user-email">
          Email address
        </DivHidden>
      </DivSignInField>

      <DivSignInField>
        <DivSignInInputPass
          name="password"
          id="user-password"
          onChange={(e) => onChange(e)}
        />
        <DivHidden as={'label'} htmlFor="user-password">
          Password
        </DivHidden>
      </DivSignInField>
    </DivSignInFields>
  )
}

export default SignInFields
