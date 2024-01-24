import { SxProps } from '@mui/material'
import { RegisterOptions } from 'react-hook-form'

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
}

export interface SelectOption {
  label: string
  value: string | number
}

export enum InputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  CONFIRM_BOX = 'confirm_box',
  DATE = 'date',
  DATE_MONTH = 'date_month',
  DATE_TIME = 'date_time',
  BLOCK = 'block',
  DISABLED = 'disabled',
  DISABLED_DATE = 'disabled_date',
  TEXT_AREA = 'textarea',
  PASSWORD = 'password',
  MULTI_RADIO = 'multi-radio',
  FILE = 'file',
}

export type ValueOptions = {
  minLength?: string | number
  maxLength?: string | number
}
