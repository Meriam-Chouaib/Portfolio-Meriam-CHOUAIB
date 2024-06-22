import { SxProps } from '@mui/material'
import { RegisterOptions } from 'react-hook-form'
import { InputTypes } from 'types/interfaces/Input.type'

export interface InputsArray {
  id: number
  label?: string
  isValid?: boolean
  inputs: InputObject[]
}

export interface InputObject {
  label: string
  inputType: InputTypes
  fieldName: string
  description?: string
  defaultValue?: unknown
  valueOptions?: ValueOptions
  options?: Array<SelectOption | null>
  config?: RegisterOptions
  children?: InputObject[]
  disabled?: boolean
  placeholder?: string
  styled?: SxProps
  autoComplete?: boolean
  size?: string
}

export interface SelectOption {
  label: string
  value: string | number
}

export type ValueOptions = {
  minLength?: string | number
  maxLength?: string | number
}
