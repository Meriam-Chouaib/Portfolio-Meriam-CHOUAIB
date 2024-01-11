import { InputObject } from 'types/interfaces/FormTypes/InputObject'

export interface GenericInputProps {
  inputObject: InputObject
  disabledForm?: boolean
  required?: boolean
  haveText?: boolean
  selectInputDependedValue?: number
  dependedInputObject?: InputObject
}
