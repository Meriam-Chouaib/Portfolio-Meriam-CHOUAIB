import { GridSize } from '@mui/material'
import { RegisterOptions } from 'react-hook-form'
import { MediaSources } from 'types/models/common/MediaType/MediaType'

export type ValueOptions = {
  minLength?: string | number
  maxLength?: string | number
  min?: number
  max?: number
}

export type OptionsConfig = {
  itemWidth: {
    xs?: GridSize
    md?: GridSize
    lg?: GridSize
  }
}

export interface InputObject {
  label: string
  inputType: InputTypes
  fieldName: string
  autoComplete?: boolean
  description?: string
  defaultValue?: unknown
  valueOptions?: ValueOptions
  options?: Array<SelectOption>
  optionsConfig?: OptionsConfig
  config?: RegisterOptions
  children?: InputObject[]
  disabled?: boolean
  placeholder?: string
  size?: 'small' | 'medium'
}

export interface SelectOption {
  label: string
  value: string | number
  image?: MediaSources
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

export enum InputSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export type OptionType<T = unknown> = {
  label: string
  value: T
}

export interface FormatInputs {
  regex: RegExp
  Format: string
}
