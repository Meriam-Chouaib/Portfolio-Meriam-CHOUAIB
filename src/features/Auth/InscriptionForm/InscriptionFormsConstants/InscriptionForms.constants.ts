import { GlobalVariables } from 'config/constant'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { InputObject } from 'types/interfaces/FormTypes/InputObject'
import { SignupAttributes } from 'types/models/AccessCard/SignupAttributes/SignupAttributes'
import { InputsConfig } from 'config/constant/inputs.config'
import { InputTypes } from 'types/interfaces/Input.type'

export const ACCESS_CARD_FOR_HIMSELF_CREDENTIALS_FORM = (
  accessCardRequest: StepsRecord
): InputObject[] => [
  {
    fieldName: SignupAttributes.COUNTRY,
    inputType: InputTypes.TEXT,
    label: 'signup.street',
    defaultValue: accessCardRequest?.haveIdCard || GlobalVariables.EmptyString,
    placeholder: 'signup.street_placeholder',
    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },

  {
    fieldName: SignupAttributes.POSTAL_CODE_ZIP,
    inputType: InputTypes.TEXT,
    label: 'signup.code_postal',
    defaultValue: GlobalVariables.EmptyString,
    placeholder: 'signup.code_postal_placeholder',

    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },
]

export const FORMATION_USER = (
  accessCardRequest: StepsRecord
): InputObject[] => [
  {
    fieldName: SignupAttributes.EMAIL_ADDRESS,
    inputType: InputTypes.TEXT,
    label: 'signup.email_label',
    defaultValue: accessCardRequest?.haveIdCard || GlobalVariables.EmptyString,
    placeholder: 'signup.email_placeholder',
    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },
]

export const FILES_USER = (accessCardRequest: StepsRecord): InputObject[] => [
  {
    fieldName: SignupAttributes.CIN,
    inputType: InputTypes.FILE,
    label: 'signup.file',
    defaultValue: [],

    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },
]
