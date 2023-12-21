import { GlobalVariables } from 'config/constant'
import { InputSize, InputTypes } from 'types/interfaces/Input.type'

export const loginFormConfig = {
  email: {
    label: 'auth.email',
    inputType: InputTypes.TEXT,
    fieldName: 'email',
    placeholder: 'common.mail_placeholder',
    autoComplete: true,
    defaultValue: '',
    valueOptions: {
      minLength: GlobalVariables.Inputs.shortText.minLength,
      maxLength: GlobalVariables.Inputs.longText.maxLength,
    },
    config: {
      required: 'auth.email_required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'auth.email_invalid',
      },
      minLength: {
        value: GlobalVariables.Inputs.shortText.minLength,
        message: 'auth.email_too_short',
      },
      maxLength: {
        value: GlobalVariables.Inputs.longText.maxLength,
        message: 'auth.email_too_long',
      },
    },
    size: InputSize.MEDIUM,
  },
  password: {
    label: 'auth.password',
    inputType: InputTypes.PASSWORD,
    autoComplete: true,
    fieldName: 'password',
    placeholder: 'common.password_placeholder',
    defaultValue: '',
    valueOptions: {
      minLength: GlobalVariables.Inputs.shortPassword.minLength,
    },
    config: {
      required: 'auth.password_required',
      minLength: {
        value: GlobalVariables.Inputs.shortPassword.minLength,
        message: 'auth.password_must_be',
      },
    },
    size: InputSize.MEDIUM,
  },
}
