import { SxProps } from '@mui/material'
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from 'react-hook-form'
import { FormatInputs, ValueOptions } from 'types/interfaces/Input.type'

export interface CustomTextFieldProps {
  label: string
  inputType: string
  field: ControllerRenderProps<FieldValues, string>
  fieldState: ControllerFieldState
  required?: boolean
  valueOptions?: ValueOptions
  disabled?: boolean
  placeholder?: string
  style?: SxProps
}
