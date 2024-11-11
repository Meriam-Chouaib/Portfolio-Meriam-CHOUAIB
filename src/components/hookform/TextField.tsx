/* eslint-disable @typescript-eslint/no-explicit-any */
// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { StandardTextFieldProps, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
// ----------------------------------------------------------------------

interface TextFieldProps extends StandardTextFieldProps {
  name: string
  label: string
  type?: 'text' | 'password' | 'file' | 'number' | 'email'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: any
}

export default function RHFTextField({
  name,
  label,
  ...other
}: TextFieldProps) {
  const { control, register } = useFormContext()
  const { t } = useTranslation()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          // TODO change the variant or the style to make textfield clearer
          variant='standard'
          label={
            <span
              style={{
                color: `#7bbfc3`,
                fontWeight: 600,
              }}
            >
              {label}
            </span>
          }
          type={other.type}
          {...field}
          fullWidth
          error={!!error}
          helperText={error && error.message && t(error?.message)}
          {...other}
          {...register(name)}
          sx={{ margin: '10px 0px' }}
        />
      )}
    />
  )
}
