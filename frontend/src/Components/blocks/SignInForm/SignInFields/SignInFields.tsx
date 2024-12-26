import {
  DivSignInFields,
  DivSignInField,
  DivSignInInputEmail,
  DivSignInInputPass,
} from './styles'
import { DivHidden } from '../../../styled/Components'

type SignInFieldsProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}
const SignInFields: React.FC<SignInFieldsProps> = ({ onChange, onBlur }) => {
  return (
    <DivSignInFields>
      <DivSignInField>
        <DivSignInInputEmail
          name="email"
          id="user-email"
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
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
          onBlur={(e) => onBlur(e)}
        />
        <DivHidden as={'label'} htmlFor="user-password">
          Password
        </DivHidden>
      </DivSignInField>
    </DivSignInFields>
  )
}

export default SignInFields
