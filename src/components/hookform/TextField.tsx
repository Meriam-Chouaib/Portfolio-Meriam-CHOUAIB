/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from 'react-hook-form'
import { TextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { useTranslation } from 'react-i18next'

type RHFTextFieldProps = MuiTextFieldProps & {
  name: string
  label: string
}

export default function RHFTextField({
  name,
  label,
  variant = 'standard',
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext()
  const { t } = useTranslation()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...other}
          fullWidth
          variant={variant}
          label={
            <span style={{ color: '#7bbfc3', fontWeight: 600 }}>{label}</span>
          }
          error={!!error}
          helperText={error && t(error.message as string)}
          sx={{ my: 1 }}
        />
      )}
    />
  )
}
