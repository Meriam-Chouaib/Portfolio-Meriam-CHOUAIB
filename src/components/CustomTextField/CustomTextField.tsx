import { Stack, Typography } from '@mui/material'
import CustomTooltip from 'components/Tooltips/CustomTooltip/CustomTooltip'
import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { InputTypes } from 'types/interfaces/Input.type'
import { TextFieldStyle } from './CustomTextField.style'
import { CustomTextFieldProps } from './CustomTextField.type'
import { GlobalVariables } from 'config/constant/global.variables'
import { GlobalFonts } from 'config/constant/fonts.config'
import Required from 'components/CustomTextField/CustomSpan/Required'

function CustomTextField({
  name,
  label,
  inputType,
  value,
  error,
  required,
  isRequired,
  valueOptions,
  placeholder,
  size,
  textAlign,
  disabled,
  hideHelperText,
  hideIcon,
  formatInputs,
  customHeight,
  autoComplete,
  helperMessage,
  translationConfig,
  maxWidth,
  unit,
  tooltipText,
  onChange,
}: CustomTextFieldProps) {
  const { t } = useTranslation()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value.replace(
      GlobalVariables.Inputs.number.regex,
      ''
    )

    onChange(eventValue)
  }

  return (
    <Stack spacing={1.5} width='100%'>
      {label && (
        <Stack direction={'row'} spacing={0.66} alignItems={'center'}>
          <Typography variant='h4'>
            {t(label)}
            {isRequired && <Required />}
          </Typography>
          {tooltipText && <CustomTooltip title={tooltipText} />}
          {hideIcon && (
            <CustomTooltip
              title={t(
                helperMessage ?? 'product.link_product_to_session_description',
                translationConfig
              )}
            />
          )}
        </Stack>
      )}
      <Stack>
        <Stack direction='row' spacing={1} alignItems={'center'}>
          <TextFieldStyle
            name={name}
            type={InputTypes.TEXT}
            value={value}
            disabled={disabled}
            autoComplete={autoComplete ? 'on' : undefined}
            onChange={
              inputType === InputTypes.NUMBER ? handleInputChange : onChange
            }
            error={!!error}
            fullWidth
            required={required}
            placeholder={placeholder && t(placeholder, translationConfig)}
            size={size}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              maxLength: valueOptions?.maxLength,
              max: valueOptions?.max,
              sx: {
                textAlign,
                height: customHeight ?? 'unset',
                paddingInline: textAlign === 'center' ? '0' : '',
              },
            }}
            sx={{
              maxWidth,
            }}
          />
          {unit && (
            <Typography
              variant='body1'
              fontFamily={GlobalFonts.FONT_PRIMARY_500}
            >
              {t(unit)}
            </Typography>
          )}
        </Stack>

        <Typography variant='body2' fontSize={'0.75rem'} color={'error'}>
          {hideHelperText
            ? GlobalVariables.EmptyString
            : t(
                error?.message ?? GlobalVariables.EmptyString,
                translationConfig
              )}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default CustomTextField
