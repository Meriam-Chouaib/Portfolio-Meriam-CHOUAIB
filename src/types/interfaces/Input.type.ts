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
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  RADIO = 'radio',
  MULTI_RADIO = 'multi-radio',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  FILE = 'file',
  PHONE_INPUT = 'phone-input',
  DATE = 'date',
  SELECT = 'select',
  WYSIWYG = 'wysiwyg',
  NUMBER_FORMAT = 'numberFormat',
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
