import { GlobalVariables } from 'config/constant'
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ValueOptions } from 'types/interfaces/FormTypes/InputObject'

import { SxProps } from '@mui/material'
import { CustomTextFieldProps } from 'components/CustomTextField/CustomTextField.type'
import DisabledInput from 'components/Inputs/DisabledInput/DisabledInput'
import { TextFieldStyle } from 'components/CustomInputs/CustomTextField/CustomTextField.style'

function CustomTextField({
  label,
  inputType,
  field,
  fieldState,
  required,
  valueOptions,
  disabled,
  placeholder,
  style,
}: CustomTextFieldProps) {
  const { t } = useTranslation()

  if (disabled) {
    return (
      <DisabledInput
        label={label}
        value={field.value}
        required={required}
        isValid={!fieldState.error}
      />
    )
  }

  return (
    <TextFieldStyle
      sx={{ ...style }}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        maxLength: valueOptions?.maxLength,
      }}
      label={t(label)}
      type={inputType}
      {...field}
      value={field.value}
      error={!!fieldState.error}
      helperText={t(fieldState.error?.message || GlobalVariables.EmptyString)}
      fullWidth
      required={required}
      placeholder={placeholder && t(placeholder)}
    />
  )
}

export default CustomTextField
