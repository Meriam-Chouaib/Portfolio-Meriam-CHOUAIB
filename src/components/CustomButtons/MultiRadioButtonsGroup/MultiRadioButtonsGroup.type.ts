import { FieldError } from 'react-hook-form'
import { OptionsConfig, SelectOption } from 'types/interfaces/Input.type'
export type MultiRadioButtonsGroupProps = {
  label: string
  placeholder?: string
  options?: SelectOption[]

  value: Array<string | number>
  error?: FieldError
  tooltipText?: string
  optionsConfig?: OptionsConfig
  isLoading?: boolean
  disabled?: boolean
  onChange: (newValues: Array<string | number>) => void
}
