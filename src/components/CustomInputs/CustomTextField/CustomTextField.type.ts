import { FieldError } from 'react-hook-form'
import { FormatInputs, ValueOptions } from 'types/interfaces/Input.type'

export interface CustomTextFieldProps {
  name?: string
  label: string
  inputType: string
  value: unknown
  error?: FieldError
  required?: boolean
  isRequired?: boolean
  valueOptions?: ValueOptions
  disabled?: boolean
  placeholder?: string
  size?: 'small' | 'medium'
  textAlign?: 'left' | 'center' | 'right'
  tooltipText?: string
  hideHelperText?: boolean
  hideIcon?: boolean
  formatInputs?: FormatInputs
  customHeight?: number | string
  autoComplete?: boolean
  helperMessage?: string
  translationConfig?: Record<string, unknown>
  maxWidth?: string | number
  unit?: string
  onChange: (value: unknown) => void
}
