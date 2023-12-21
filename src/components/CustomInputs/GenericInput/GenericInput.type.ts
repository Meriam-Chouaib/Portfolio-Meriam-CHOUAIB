import {
  FormatInputs,
  InputObject,
  OptionType,
} from 'types/interfaces/Input.type'

export interface GenericInputProps {
  inputObject: InputObject
  disabledForm?: boolean
  required?: boolean
  haveText?: boolean
  textAlign?: 'left' | 'center' | 'right'
  tooltipText?: string
  hideHelperText?: boolean
  hideIcon?: boolean
  formatInputs?: FormatInputs
  customHeight?: number | string
  inProgress?: boolean
  helperMessage?: string
  translationConfig?: Record<string, unknown>
  maxWidth?: number | string
  unit?: string
  isLoading?: boolean
  optionsSelect?: OptionType<string | number>[]
  textAreaHeight?: string
  validatePattern?: boolean
  isRequired?: boolean
  textEditorHeight?: number
  format?: string
  onChangeTextEditor?: () => void
}
