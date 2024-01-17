import { GlobalVariables } from 'config/constant'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import { InputObject, InputTypes } from 'types/interfaces/FormTypes/InputObject'
import { SignupAttributes } from 'types/models/AccessCard/SignupAttributes/SignupAttributes'
import { InputsConfig } from 'config/constant/inputs.config'

export const ACCESS_CARD_FOR_HIMSELF_CREDENTIALS_FORM = (
  accessCardRequest: StepsRecord
): InputObject[] => [
  {
    fieldName: SignupAttributes.COUNTRY,
    inputType: InputTypes.TEXT,
    label: 'accessCard.country',
    defaultValue: accessCardRequest?.haveIdCard || GlobalVariables.EmptyString,
    placeholder: 'Enter your country',
    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },

  {
    fieldName: SignupAttributes.IS_OVER_18,
    inputType: InputTypes.DATE,
    label: 'accessCard.isOver18',
    defaultValue: accessCardRequest?.isOver18 || GlobalVariables.EmptyString,
    config: {
      required: 'common.required',
      valueAsDate: true,
      validate: (isOver18) => isOver18 || 'identification.isOver18', // this is the text of error if exists ('identification.isOver18')
    },
  },
]

export const FORMATION_USER = (
  accessCardRequest: StepsRecord
): InputObject[] => [
  {
    fieldName: SignupAttributes.STREET_APARTMENT_NUMBER,
    inputType: InputTypes.TEXT,
    label: 'street',
    defaultValue: accessCardRequest?.haveIdCard || GlobalVariables.EmptyString,
    placeholder: 'Enter your street',
    config: {
      ...InputsConfig.Name.Config,
      validate: (value: unknown) => !!value,
    },
  },
]
